var https = require('https');
var result ="";
function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
    result+=data ;//solution for empty string
    //result.push(data,+ "\n" );

    });

    response.on('end', function() {
      //console.log( "Response stream complete.",result)
      console.log(result + 'Response stream complete.');
    });

  });
}

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

 getAndPrintHTML(requestOptions);