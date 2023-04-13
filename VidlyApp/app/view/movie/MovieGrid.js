Ext.define('ClientApp1.view.movie.MovieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',

    requires: [
        'ClientApp1.store.Movie'
    ],

    title: 'Movie',

    store: {
        type: 'movie'
    },

    columns: [
        { text: 'Movie Title',  dataIndex: 'MovieTitle',flex: 1 },
        { text: 'Description', dataIndex: 'Description', flex: 1 },
        { text: 'Genre', dataIndex: 'Genre', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
