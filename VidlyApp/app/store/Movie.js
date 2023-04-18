Ext.define('ClientApp1.store.Movie', {
    extend: 'Ext.data.Store',

    alias: 'store.movie',

    model: 'ClientApp1.model.Movie',

    fields: [
        'MovieTitle', 'Description', 'Genre'
    ],

    proxy: {
        type: 'ajax',
        url: 'http://localhost:5001/api/Movies',
        method: 'Get',
        reader: {
            rootProperty: 'items'
        }
    }
})