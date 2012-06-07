Ext.define('Pandora.view.SongControls', {
    extend: 'Ext.Container',
    xtype: 'songcontrols',

    config: {
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    ui: 'plain',
                    iconMask: true
                },
                layout: 'hbox',
                items: [{
                    iconCls: 'star',
                    action: 'vote-up'
                }, {
                    iconCls: 'flag',
                    action: 'vote-down'
                }, {
                    iconCls: 'pause',
                    action: 'pause'
                }, {
                    iconCls: 'fforward',
                    action: 'skip'
                }]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [{
                    xtype: 'component',
                    html: '2:00'
                }, {
                    xtype: 'slider',
                    value: 50,
                    width: 200,
                    minValue: 0,
                    maxValue: 100
                }, {
                    xtype: 'component',
                    html: '4:00'
                }]
            }
        ]
    }
});