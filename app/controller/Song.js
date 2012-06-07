Ext.define('Pandora.controller.Song', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['RecentlyPlayed'],

        refs: {
            songInfo: 'songinfo',
            recentlyPlayed: 'recentlyplayed'
        },

        control: {
            recentlyPlayed: {
                select: 'onSongSelect'
            }
        }
    },

    init: function() {
        // Listen for an application wide event
        this.getApplication().on({
            stationstart: 'onStationStart',
            scope: this
        });
    },

    onStationStart: function(station) {
        var store = Ext.getStore('RecentlyPlayed');

        store.load({
            callback: this.onRecentSongsLoad,
            params: {
                station: station.getId()
            },
            scope: this
        });
    },

    onRecentSongsLoad: function(songs, request) {
        var store = Ext.getStore('RecentlyPlayed'),
            recentlyPlayed = this.getRecentlyPlayed();

        // The data should already be filtered on the serverside but since we
        // are loading static data we need to do this after we loaded all the data
        store.clearFilter();
        store.filter('station', request.getParams().station);
        store.sort('played_date', 'ASC');

        recentlyPlayed.select(store.last());
    },

    onSongSelect: function(selModel, song) {
        this.getSongInfo().setRecord(song);
    }
});