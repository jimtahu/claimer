var names = require('naming-language');
var jsonfile = require('jsonfile');
var data=jsonfile.readFileSync('country_data.json');
var governments = data.governments;

function countryDesc(){
    var myLang = names.makeRandomLanguage();
    var myGov = governments[Math.floor(Math.random()*governments.length)];
    var myName = names.makeName(myLang);
    return (" claimed by the "+myName+" "+myGov);
}
exports.governments = governments;
exports.names = names;
exports.getDesc = countryDesc;
