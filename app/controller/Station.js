Ext.define('Pandora.controller.Station', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Stations'],

        refs: {
            stationsList: 'stationslist'
        },

        control: {
            stationsList: {
                select: 'onStationSelect'
            }
        }
    },

    launch: function() {
        var stationsStore = Ext.getStore('Stations');
        stationsStore.on({
            load: 'onStationsLoad',
            scope: this
        });
        stationsStore.load();
    },

    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.select(0);
    },

    onStationSelect: function(list, record) {
        // Fire an application wide event
        this.getApplication().fireEvent('stationstart', record);
    }
});