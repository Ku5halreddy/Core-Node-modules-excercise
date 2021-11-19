const fs = require("fs");
const request = require("request");
const process = require('process');
const key=process.argv;

function getOptions(uri){

var options = {
    url:uri,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
  };
  return options;
}

  request.get(getOptions('https://icanhazdadjoke.com/search?term='+key[2]), function(error, response, body){
    console.log(JSON.parse(body).results);
    fs.writeFileSync('data.txt','');
    let jokes=JSON.parse(body).results;
    
    for(var joke of jokes)
    fs.appendFile('data.txt', joke.joke+'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
//console.log(data);
 })



//synchronous
// var data= fs.readFileSync('data.txt', 'utf8');
// console.log(data);
//fs.writeFileSync('data.txt', ' new text');
//console.log(data);
