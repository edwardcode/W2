var https = require('https');

function getHTML (options, callback) {
var result = '';
  /* Add your code here */
https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
    result+=data ;//solution for empty string
    //result.push(data,+ "\n" );

    });

    response.on('end', function() {
      //console.log( "Response stream complete.",result)
      // console.log(result + 'Response stream complete.');
    callback(result);

    });

  });
};

function printHTML (html) {
  console.log(html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);