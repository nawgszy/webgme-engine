/*globals define*/
/*eslint-env browser*/

/**
 * @author pmeijer / https://github.com/pmeijer
 */


define([
    'plugin/managerbase',
    'blob/BlobClient',
    'common/storage/project/project'
], function (PluginManagerBase, BlobClient, Project) {
    'use strict';

    var ROOT_PATH = '';

    /**
     *
     * @param client
     * @param storage
     * @param state
     * @param mainLogger
     * @param gmeConfig
     * @constructor
     */
    function PluginManager(client, storage, state, mainLogger, gmeConfig) {

        var self = this,
            logger = mainLogger.fork('PluginManager');

        this.getCurrentPluginContext = function (pluginId, activeNodeId, activeSelectionIds) {
            var activeNode,
                validPlugins,
                context = {
                    managerConfig: {
                        project: client.getProjectObject(),
                        branchName: client.getActiveBranchName(),
                        commitHash: client.getActiveCommitHash(),
                        activeNode: ROOT_PATH,
                        activeSelection: [],
                        namespace: ''
                    },
                    pluginConfig: null
                };

            // If executed from the Generic UI we can access the active- and selected-nodes.
            if (typeof WebGMEGlobal !== 'undefined') {
                /* eslint-disable no-undef*/
                context.managerConfig.activeSelection = WebGMEGlobal.State.getActiveSelection();
                context.managerConfig.activeNode = WebGMEGlobal.State.getActiveObject();
                /* eslint-enable no-undef*/
            }

            if (activeSelectionIds) {
                context.managerConfig.activeSelection = activeSelectionIds;
            }

            if (typeof activeNodeId === 'string') {
                context.managerConfig.activeNode = activeNodeId;
            }

            // Given the active-node we infer the namespace (user may still select another one).
            activeNodeId = context.managerConfig.activeNode;
            if (activeNodeId && pluginId) {
                activeNode = client.getNode(activeNodeId);
                do {
                    validPlugins = activeNode.getOwnRegistry('validPlugins');
                    if (validPlugins && validPlugins.indexOf(pluginId) > -1) {
                        // The plugin was defined at this particular node, we use the namespace of it.
                        context.managerConfig.namespace = activeNode.getNamespace();
                        break;
                    }

                    activeNode = activeNode.getBaseId() ? client.getNode(activeNode.getBaseId()) : null;
                } while (activeNode);
            }

            return context;
        };

        /**
         * Run the plugin in the browser.
         * @param {string|function} pluginIdOrClass - id or class for plugin.
         * @param {object} context
         * @param {object} context.managerConfig - where the plugin should execute.
         * @param {ProjectInterface} context.managerConfig.project - project (e.g. client.getProjectObject()).
         * @param {string} [context.managerConfig.activeNode=''] - path to activeNode.
         * @param {string} [context.managerConfig.activeSelection=[]] - paths to selected nodes.
         * @param {string} context.managerConfig.commitHash - commit hash to start the plugin from.
         * @param {string} [context.managerConfig.branchName] - branch which to save to.
         * @param {string} [context.managerConfig.namespace=''] - used namespace ('' represents root namespace).
         * @param {object} [context.pluginConfig=%defaultForPlugin%] - specific configuration for the plugin.
         * @param {function(err, PluginResult)} callback
         */
        this.runBrowserPlugin = function (pluginIdOrClass, context, callback) {
            var blobClient = new BlobClient({
                    logger: logger.fork('BlobClient'),
                    relativeUrl: gmeConfig.client.mountedPath + '/rest/blob/'
                }),
                pluginManager = new PluginManagerBase(blobClient, null, mainLogger, gmeConfig);

            pluginManager.browserSide = true;

            pluginManager.notificationHandlers = [function (data, callback) {
                self.dispatchPluginNotification(data);
                callback(null);
            }];

            pluginManager.projectAccess = client.getProjectAccess();

            pluginManager.executePlugin(pluginIdOrClass, context.pluginConfig, context.managerConfig, callback);
        };

        /**
         * Run the plugin on the server inside a worker process.
         * @param {string|function} pluginIdOrClass - id or class for plugin.
         * @param {object} context
         * @param {object} context.managerConfig - where the plugin should execute.
         * @param {ProjectInterface|string} context.managerConfig.project - project or id of project.
         * @param {string} [context.managerConfig.activeNode=''] - path to activeNode.
         * @param {string} [context.managerConfig.activeSelection=[]] - paths to selected nodes.
         * @param {string} context.managerConfig.commitHash - commit hash to start the plugin from.
         * @param {string} [context.managerConfig.branchName] - branch which to save to.
         * @param {string} [context.managerConfig.namespace=''] - used namespace ('' represents root namespace).
         * @param {object} [context.pluginConfig=%defaultForPlugin%] - specific configuration for the plugin.
         * @param {function} callback
         */
        this.runServerPlugin = function (pluginIdOrClass, context, callback) {
            var pluginId = typeof pluginIdOrClass === 'string' ? pluginIdOrClass : pluginIdOrClass.metadata.id;
            if (context.managerConfig.project instanceof Project) {
                context.managerConfig.project = context.managerConfig.project.projectId;
            }

            storage.simpleRequest({command: 'executePlugin', name: pluginId, context: context}, function (err, result) {
                if (err) {
                    callback(err, err.result);
                } else {
                    callback(null, result);
                }
            });
        };

        /**
         * @param {string[]} pluginIds - All available plugins on the server.
         * @param {string} [nodePath=''] - Node to get the validPlugins from.
         * @returns {string[]} - Filtered plugin ids.
         */
        this.filterPlugins = function (pluginIds, nodePath) {
            var filteredIds = [],
                validPlugins,
                i,
                node;

            logger.debug('filterPluginsBasedOnNode allPlugins, given nodePath', pluginIds, nodePath);
            if (!nodePath) {
                logger.debug('filterPluginsBasedOnNode nodePath not given - will fall back on root-node.');
                nodePath = ROOT_PATH;
            }

            node = state.nodes[nodePath];

            if (!node) {
                logger.warn('filterPluginsBasedOnNode node not loaded - will fall back on root-node.', nodePath);
                nodePath = ROOT_PATH;
                node = state.nodes[nodePath];
            }

            if (!node) {
                logger.warn('filterPluginsBasedOnNode root node not loaded - will return full list.');
                return pluginIds;
            }

            validPlugins = (state.core.getRegistry(node.node, 'validPlugins') || '').split(' ');
            for (i = 0; i < validPlugins.length; i += 1) {
                if (pluginIds.indexOf(validPlugins[i]) > -1) {
                    filteredIds.push(validPlugins[i]);
                } else if (validPlugins[i] === '') {
                    // Skip empty strings..
                } else {
                    logger.warn('Registered plugin for node at path "' + nodePath +
                        '" is not amongst available plugins', pluginIds);
                }
            }

            return filteredIds;
        };

        this.dispatchPluginNotification = function (data) {
            var notification = {
                severity: data.notification.severity || 'info',
                message: '[Plugin] ' + data.pluginName + ' - ' + data.notification.message
            };

            if (typeof data.notification.progress === 'number') {
                notification.message += ' [' + data.notification.progress + '%]';
            }

            logger.debug('plugin notification', data);
            client.dispatchEvent(client.CONSTANTS.NOTIFICATION, notification);
            client.dispatchEvent(client.CONSTANTS.PLUGIN_NOTIFICATION, data);
        };
    }

    return PluginManager;

});
