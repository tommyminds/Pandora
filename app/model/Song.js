Ext.define('Pandora.model.Song', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'name', type: 'string'},
            {name: 'artist', type: 'string'},
            {name: 'album', type: 'string'},
            {name: 'image', type: 'string'},
            {name: 'station', type: 'int'}
        ],
        proxy: {
            type: 'ajax',
            url: 'data/recentsongs.json',
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});