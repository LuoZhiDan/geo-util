
var fs = require('fs');
var toData = require('./toData');

/**
 * 将geojson转换svg路径，作为文件输出
 * @param {*} gs 
 * @param {*} path 
 */
function toFile( gs, path ) {
    fs.writeFile(path, JSON.stringify( toData(gs) ), err => {
        if (err) {
            console.log( err )
        }
    });
}

module.exports = toFile;