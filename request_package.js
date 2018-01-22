const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('err', function(err){
    throw err;
  })
  .on('response', function(response){
    console.log('response code: ', response.statusCode);
  })
  .on('data', function(){
    console.log('Downloading...');
  })
  .on('end', function(){
      console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));