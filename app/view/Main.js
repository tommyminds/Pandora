Ext.define("Pandora.view.Main", {
    extend: 'Ext.Container',
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
                    xtype: 'container',
                    flex: 1,
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
                },
                {
                    xtype: 'component',
                    cls: 'app-logo',
                    html: 'Sencha Radio'
                }
            ]
        }, {
            width: 250,
            docked: 'left',
            xtype: 'list',
            grouped: true,
            store: {
                data: [
                    {name: 'Black Star'},
                    {name: 'Led Zeppelin'}
                ],
                grouper: function(record) {
                    return record.get('name')[0];
                }
            },
            itemTpl: '{name}',
            items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Stations',
                    ui: 'light'
                },
                {
                    docked: 'bottom',
                    xtype: 'toolbar',
                    ui: 'light',
                    items: [
                        {
                            xtype: 'button',
                            action: 'settings',
                            iconMask: true,
                            iconCls: 'settings',
                            ui: 'plain'
                        },
                        {
                            xtype: 'segmentedbutton',
                            layout: {
                                type: 'hbox',
                                align: 'middle'
                            },
                            items: [
                                {
                                    text: 'By Date',
                                    action: 'filter-date'
                                },
                                {
                                    text: 'ABC',
                                    action: 'filter-name'
                                }
                            ]
                        }
                    ]
                }
            ]
        }, {
            html: 'Center area takes up the rest of the space'
        }]
    }
});
