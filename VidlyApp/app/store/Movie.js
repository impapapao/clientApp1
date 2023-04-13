Ext.define('ClientApp1.store.Movie', {
    extend: 'Ext.data.Store',

    alias: 'store.movie',

    model: 'ClientApp1.model.Movie',

    fields: [
        'MovieTitle', 'Description', 'Genre'
    ],

    proxy: {
        type: 'ajax',
        url: 'https://localhost:5001/Movie',
        reader: {
            rootProperty: 'items'
        }
    }
})