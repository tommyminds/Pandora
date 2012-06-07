Ext.define('Pandora.view.StationsList', {
    extend: 'Ext.List',
    xtype: 'stationslist',

    config: {
        cls: 'stations-list',
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
                xtype: 'toolbar',
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
    }
});