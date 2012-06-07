Ext.define('Pandora.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'Pandora.view.StationsList',
        'Pandora.view.SongControls',
        'Pandora.view.SongInfo',
        'Pandora.view.RecentlyPlayed'
    ],

    config: {
        layout: 'fit',
        items: [{
            cls: 'top-bar',
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'selectfield',
                    placeHolder: 'Search station...',
                    displayField: 'name',
                    valueField: 'id',
                    width: 180
                },
                {
                    xtype: 'songcontrols',
                    flex: 1
                },
                {
                    xtype: 'component',
                    cls: 'app-logo',
                    html: 'Sencha Radio'
                }
            ]
        }, {
            xtype: 'stationslist',
            docked: 'left'
        }, {
            xtype: 'container',
            layout: 'fit',
            items: [{
                xtype: 'recentlyplayed',
                docked: 'top'
            }, {
                xtype: 'songinfo',
                scrollable: true
            }]
        }]
    }
});
