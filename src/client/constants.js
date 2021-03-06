/*globals define*/
/*eslint-env browser*/

/**
 * @author pmeijer / https://github.com/pmeijer
 */

define([
    'common/Constants'
], function (CONSTANTS) {
    'use strict';

    return {

        STORAGE: CONSTANTS.STORAGE,
        CORE: CONSTANTS.CORE,

        BRANCH_STATUS: CONSTANTS.STORAGE.BRANCH_STATUS,

        UNCAUGHT_EXCEPTION: 'UNCAUGHT_EXCEPTION',

        // Events
        NETWORK_STATUS_CHANGED: CONSTANTS.STORAGE.NETWORK_STATUS_CHANGED,
        BRANCH_STATUS_CHANGED: 'BRANCH_STATUS_CHANGED',

        BRANCH_CLOSED: 'BRANCH_CLOSED',
        BRANCH_OPENED: 'BRANCH_OPENED',
        PROJECT_CLOSED: 'PROJECT_CLOSED',
        PROJECT_OPENED: 'PROJECT_OPENED',

        BRANCH_CHANGED: 'BRANCH_CHANGED',

        NEW_COMMIT_STATE: 'NEW_COMMIT_STATE',

        UNDO_AVAILABLE: 'UNDO_AVAILABLE',
        REDO_AVAILABLE: 'REDO_AVAILABLE',

        // general notification event
        NOTIFICATION: 'NOTIFICATION',
        CONNECTED_USERS_CHANGED: 'CONNECTED_USERS_CHANGED',

        // Constraint Checking
        META_RULES_RESULT: 'META_RULES_RESULT',
        CONSTRAINT_RESULT: 'CONSTRAINT_RESULT'
    };
});