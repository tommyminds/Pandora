Ext.define('Pandora.store.Stations', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Pandora.model.Station',
        grouper: function(record) {
            return record.get('name')[0];
        }
    }
});