
var d3 = require('d3');
var width = 1024;
var height = 1024;
var padding = 10;

//使用d3.geo将geojson转换svg路径
projection = d3.geoMercator();

/**
 * 将geojson转换svg路径，作为数据输出
 * @param {*} gs 
 */
function toData( gs ) {
    var result = [];
    projection.fitExtent([[padding, padding], [width - padding * 2, height - padding * 2]], gs);
    path = d3.geoPath(projection);
    gs.features.map((d, i) => {
        result.push({
            _id: '_path_' + i,
            name: d.properties.name,
            center: projection(d.properties.cp),
            path: path(d)
        });
    });

    return {
        "type": "FeatureCollection",
        features: result
    }
}

module.exports = toData;