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
            xtype: 'container',
            layout: 'fit',
            items: [{
                xtype: 'dataview',
                inline: true,
                docked: 'top',
                cls: 'coverview',
                store: {
                    data: [
                        {name: 'Won\'t Get Fooled Again', image: 'who.jpg'},
                        {name: 'Stairway from Heaven', image: 'ledzeppelin.jpg'}
                    ]
                },
                itemTpl: '<img src="resources/images/covers/{image}"/>',
                scrollable: {
                    direction: 'horizontal'
                }
            }, {
                html: 'song info'
            }]
        }]
    }
});
