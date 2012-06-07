Ext.define('Pandora.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'Pandora.view.StationsList',
        'Pandora.view.SongControls'
    ],

    config: {
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            height: 90,
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
            docked: 'left',
            width: 250
        }, {
            html: 'Center area takes up the rest of the space'
        }]
    }
});
