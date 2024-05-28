var map = L.map('map').setView([-83.97135,42.44836], 12);

var MBTS = L.tileLayer.mbTiles('tiles_test.mbtiles').addTo(map);

map.createPane('imagePane');
map.getPane('imagePane').style.zIndex = 20;

var OSMMap = L.tileLayer.mbTiles('tiles20.mbtiles', {
    pane: 'imagePane'
}).addTo(map);

