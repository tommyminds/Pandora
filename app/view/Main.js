Ext.define("Pandora.view.Main", {
    extend: 'Ext.Container',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Top Toolbar'
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
