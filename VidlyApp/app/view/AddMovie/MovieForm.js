Ext.define('ClientApp1.view.AddMovie.MovieForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-movie',
    //controller: 'form-movieController',

    frame: true,
    title: 'Add Movie',
    bodyPadding: 10,
    scrollable: false,
    width:355,
    bodyStyle: 'center',
    url: 'http://localhost:44334/Movie',
    method: 'POST',

    fieldDefaults: {
        labelAlign: "center",
        labelWidth: 115,
        msgTarget: 'slide'
    },

    items: {
        xtype: 'fieldset',
        title: 'Add Movie',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Movie Title',
            emptyText: 'Movie Title',
            name: 'MovieTitle'
        }, {
            fieldLabel: 'Description',
            emptyText: 'Description',
            name: 'Description'
        }, {
            fieldLabel: 'Genre',
            emptyText: 'Genre',
            name: 'Genre'
        }],
    },
    JsonSubmit: true,
    buttons: [{
        text: 'Submit',
        disabled: true,
        formBind: true,
        handler: function() {
            var form = this.up('form');

            if(form.isValid()) {
                form.submit({
                    success: function(form, action) {
                        Ext.Msg.alert(
                            'Success',
                            'The Movie is Added in the Database.'
                        )
                    },
                    failure: function(){
                        Ext.Msg.alert("Failure", "Ops!, something went wrong")
                    }
                })
            }
        }
    }]
})