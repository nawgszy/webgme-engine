/*globals define*/
/*eslint-env node, browser*/

/**
 * Generated by PluginGenerator from webgme on Fri Apr 17 2015 11:49:47 GMT-0500 (Central Daylight Time).
 */
if (typeof define !== 'undefined') {
    define(['plugin/PluginConfig',
        'plugin/PluginBase',
        'text!./metadata.json'
    ], function (PluginConfig, PluginBase, pluginMetadata) {
        'use strict';

        pluginMetadata = JSON.parse(pluginMetadata);

        /**
         * Initializes a new instance of MultipleMainCallbackCalls.
         * @class
         * @augments {PluginBase}
         * @classdesc This class represents the plugin MultipleMainCallbackCalls.
         * @constructor
         */
        var MultipleMainCallbackCalls = function () {
            // Call base class' constructor.
            PluginBase.call(this);
            this.pluginMetadata = pluginMetadata;
        };

        MultipleMainCallbackCalls.metadata = pluginMetadata;

        MultipleMainCallbackCalls.prototype = Object.create(PluginBase.prototype);
        MultipleMainCallbackCalls.prototype.constructor = MultipleMainCallbackCalls;

        /**
         * Main function for the plugin to execute. This will perform the execution.
         * Notes:
         * - Always log with the provided logger.[error,warning,info,debug].
         * - Do NOT put any user interaction logic UI, etc. inside this method.
         * - callback always has to be called even if error happened.
         *
         * @param {function(string, plugin.PluginResult)} callback - the result callback
         */
        MultipleMainCallbackCalls.prototype.main = function (callback) {
            // Use self to access core, project, result, logger etc from PluginBase.
            // These are all instantiated at this point.
            var self = this;

            // This will save the changes. If you don't want to save;
            // exclude self.save and call callback directly from this scope.
            self.result.setSuccess(true);
            callback(null, self.result);
            callback(null, self.result);
            callback(null, self.result);
        };

        return MultipleMainCallbackCalls;
    });
}