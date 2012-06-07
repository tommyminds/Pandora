Ext.define('Pandora.store.RecentlyPlayed', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Pandora.model.Song',

        proxy: {
            type: 'ajax',
            url: 'data/recentlyplayed.json',
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});