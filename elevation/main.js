var map = L.map('map').setView([42.44836, -83.97135], 12);

var tiles = L.tileLayer.mbTiles('tiles_test.mbtiles').addTo(map)

