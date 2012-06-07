Ext.define('Pandora.view.RecentlyPlayed', {
    extend: 'Ext.DataView',
    xtype: 'recentlyplayed',

    config: {
        inline: true,
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
    }
});