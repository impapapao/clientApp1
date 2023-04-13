/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ClientApp1.Application',

    name: 'ClientApp1',

    requires: [
        // This will automatically load all classes in the ClientApp1 namespace
        // so that application classes do not need to require each other.
        'ClientApp1.*'
    ],

    // The name of the initial view to create.
    mainView: 'ClientApp1.view.main.Main'
});
