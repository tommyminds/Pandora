Ext.define('Pandora.model.Station', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'}
        ],

        proxy: {
            type: 'ajax',
            url: 'data/stations.json',
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});