Ext.define('Pandora.view.SongInfo', {
    extend: 'Ext.Container',
    xtype: 'songinfo',

    config: {
        tpl: '<h1>About {artist}</h1><p>{description}</p>',
        html: 'Select a song to view the song information here...',
        items: {
            docked: 'top',
            xtype: 'container',
            cls: 'song-description',
            items: [{
                xtype: 'component',
                cls: 'song-description',
                role: 'songdescription',
                tpl: '<h2>{artist}</h2><h1>{name}</h1><h2>{album}</h2>'
            }, {
                xtype: 'button',
                text: 'menu',
                action: 'song-menu'
            }]
        }
    },

    updateRecord: function(record) {
        this.down('[role=songdescription]').setRecord(record);
        this.callParent([record]);
    }
});