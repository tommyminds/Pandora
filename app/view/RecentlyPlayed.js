Ext.define('Pandora.view.RecentlyPlayed', {
    extend: 'Ext.DataView',
    xtype: 'recentlyplayed',

    config: {
        inline: true,
        cls: 'coverview',
        store: 'RecentlyPlayed',
        itemTpl: '<img src="resources/images/covers/{image}"/>',
        scrollable: {
            direction: 'horizontal'
        }
    }
});