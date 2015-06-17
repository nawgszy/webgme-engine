/* jshint node:true, mocha:true, expr:true */
/**
 * @author kecso / https://github.com/kecso
 */

var testFixture = require('../_globals.js'),
    gmeConfig = testFixture.getGmeConfig();

describe('merge CLI test', function () {
    'use strict';
    var filename = require('path').normalize('src/bin/merge.js'),
        mergeCli = require('../../src/bin/merge'),
        applyCLI = require('../../src/bin/apply'),
        logger = testFixture.logger.fork('merge.CLI'),
        database,
        projectName = 'mergeCliTest',
        oldProcessExit = process.exit,
        oldConsoleLog = console.log,
        oldConsoleError = console.error,
        oldProcessStdoutWrite = process.stdout.write,
        oldConsoleWarn = console.warn,
        suppressLogAndExit = function (saveBuffer) {
            process.exit = function (code) {
                // TODO: would be nice to send notifications for test
                if (saveBuffer) {
                    saveBuffer.code = code;
                }
            };
            console.log = function () {
                //oldConsoleLog(args);
                var i;
                if (saveBuffer) {
                    saveBuffer.log = saveBuffer.log || '';
                    for (i = 0; i < arguments.length; i++) {
                        saveBuffer.log += arguments[i] + ' ';
                    }
                    saveBuffer.log += '\n';
                }
            };
            console.error = function () {
                //oldConsoleError(args);
                var i;
                if (saveBuffer) {
                    saveBuffer.error = saveBuffer.error || '';
                    for (i = 0; i < arguments.length; i++) {
                        saveBuffer.error += arguments[i] + ' ';
                    }
                    saveBuffer.error += '\n';
                }
            };
            console.warn = console.error;
            process.stdout.write = function () {
                var i;
                if (saveBuffer) {
                    saveBuffer.log = saveBuffer.log || '';
                    for (i = 0; i < arguments.length; i++) {
                        saveBuffer.log += arguments[i] + ' ';
                    }
                    saveBuffer.log += '\n';
                }
            };
        },
        restoreLogAndExit = function () {
            console.log = oldConsoleLog;
            console.error = oldConsoleError;
            console.warn = oldConsoleWarn;
            process.stdout.write = oldProcessStdoutWrite;
            process.exit = oldProcessExit;
        },
        addTest = function (parameters) {
            it(parameters.id, function (done) {
                var buffer = {log: '', error: '', code: 0};
                suppressLogAndExit(buffer);
                mergeCli.main(['node', filename, parameters.params])
                    .then(function () {
                        restoreLogAndExit();
                        buffer.code.should.be.eql(parameters.code || 0);
                        buffer.error.should.be.empty;
                        if (parameters.out) {
                            buffer.log.should.contain(parameters.out);
                        }
                        done();
                    })
                    .catch(function (err) {
                        restoreLogAndExit();
                        if (err instanceof SyntaxError) {
                            done();
                        } else {
                            done(err);
                        }
                    });
            });
        };
    before(function (done) {
        var oldDone = done;

        testFixture.clearDBAndGetGMEAuth(gmeConfig, ['PluginManagerBase', projectName])
            .then(function (gmeAuth_) {
                var gmeAuth;
                gmeAuth = gmeAuth_;
                database = testFixture.getMongoStorage(logger, gmeConfig, gmeAuth);
                database.openDatabase(function (err) {
                    if (err) {
                        done(err);
                        return;
                    }

                    done = function (error) {
                        database.closeDatabase(function (err) {
                            oldDone(error || err);
                        });
                    };
                    database.deleteProject({projectName: projectName}, function (err) {
                        if (err) {
                            done(err);
                            return;
                        }

                        testFixture.openContext(database, gmeConfig, logger, {
                                projectName: projectName,
                                branchName: 'master',
                                createProject: true,
                                projectSeed: './test/bin/merge/base.json'
                            }, function (err, result) {
                                if (err) {
                                    done(err);
                                    return;
                                }
                                result.project.createBranch('other', result.commitHash, function (err) {
                                    if (err) {
                                        done(err);
                                        return;
                                    }

                                    applyCLI.applyPatch(
                                        database,
                                        projectName,
                                        'master',
                                        JSON.parse(
                                            testFixture.fs.readFileSync('./test/bin/merge/masterDiff.json')
                                        ),
                                        false,
                                        undefined,
                                        function (err/*, result*/) {
                                            if (err) {
                                                done(err);
                                                return;
                                            }

                                            applyCLI.applyPatch(
                                                database,
                                                projectName,
                                                'other',
                                                JSON.parse(
                                                    testFixture.fs.readFileSync('./test/bin/merge/otherDiff.json')
                                                ),
                                                false,
                                                undefined,
                                                function (err/*, result*/) {
                                                    done(err);
                                                }
                                            );
                                        }
                                    );
                                });
                            }
                        );
                    });
                });
            });
    });

    after(function (done) {
        database.openDatabase()
            .then(function () {
                return database.deleteProject({projectName: projectName});
            })
            .then(function () {
                database.closeDatabase(done);
            })
            .catch(done);
    });

    it('should have a main', function () {
        mergeCli.should.have.property('main');
    });
    addTest({id: '-h prints out help text', params: '-h', out: 'Usage: merge [options]'});
    addTest({id: '--help prints out help text', params: '--help', out: 'Usage: merge [options]'});
    addTest({id: 'empty parameter list is faulty', params: '', out: 'project identifier'});
    addTest({id: 'missing mine parameter', params: '-p ' + projectName, out: 'my branch/commit parameter', code: 1});
    addTest({id: 'invalid mine parameter', params: '-p ' + projectName + ' -M faulty@name', out: 'invalid \'mine\''});
    addTest({
        id: 'missing theirs parameter',
        params: '-p ' + projectName + ' -M other',
        out: 'their branch/commit',
        code: 1
    });
    addTest({
        id: 'invalid mine parameter',
        params: '-p ' + projectName + ' -M other -T fault@all',
        out: 'invalid \'theirs\''
    });
    addTest({
        id: 'console output of the merge',
        params: '-p ' + projectName + ' -M other -T master',
        out: 'diff base->mine:'
    });
    addTest({
        id: 'automerge',
        params: '-p ' + projectName + ' -M other -T master -a',
        out: 'was successfully updated with the merged result'
    });
});