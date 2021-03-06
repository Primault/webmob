/*
 * File: app/controller/MainController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('devmob.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Bd'
        ],
        stores: [
            'BDStore'
        ],

        refs: {
            Liste: '#listevue'
        },

        control: {
            "#listevue": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        console.log("Click liste item");
        console.log( record.getData());
        console.log(dataview);
    },

    init: function(application) {
        console.log( "initialisation du controler" );
    },

    launch: function() {
        console.log( "lancement du controler" );
        console.log(this.getListe());
    }

});