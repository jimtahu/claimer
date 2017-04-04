var jsonfile = require('jsonfile');
var data=jsonfile.readFileSync('country_data.json');
var governments = data.governments;
var names = data.names;

function countryDesc(){
    var myGov = governments[Math.floor(Math.random()*governments.length)];
    var myName = names[Math.floor(Math.random()*names.length)];
    return (" claimed by the "+myName+" "+myGov);
}
exports.governments = governments;
exports.names = names;
exports.getDesc = countryDesc;
