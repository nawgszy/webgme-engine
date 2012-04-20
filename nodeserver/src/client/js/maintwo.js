// set the baseUrl for module lookup to '/lib' folder
require.config({
    baseUrl: "/lib"
});

// let require load all the toplevel needed script and call us on domReady
require([   'order!jquery.min',
            'order!jquery-ui.min',
            'domReady',
            'order!./js/clienttwo.js',
            'order!./js/TBCtrlTwo.js',
            'order!./js/JSTreeBrowserWidget.js',
            'order!./js/delayctrl.js',
            'order!./js/DynaTreeBrowserWidget.js',
            '/common/logmanager.js',
            '/common/CommonUtil.js' ], function( jquery,
                                        jqueryUI,
                                        domReady,
                                        Client,
                                        TreeBrowserControl,
                                        JSTreeBrowserWidget,
                                        DelayControl,
                                        DynaTreeBrowserWidget,
                                        logManager,
                                        commonUtil ) {
    domReady(function () {

        if ( commonUtil.DEBUG === true ) {
            logManager.setLogLevel( logManager.logLevels.ALL );
        }

        var client = undefined;
        var tJSTree = undefined;
        var connect = function(){
            client = new Client("localhost:8081");
            client.connect(function(){
                client.makeconnect(function(){
                    tJSTree = new TreeBrowserControl(client, new JSTreeBrowserWidget( "tbJSTree" ) );
                });
            });
        };

        /*main*/
        connect();
    });
});