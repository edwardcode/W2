var https = require('https');
var result = "";
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      result += data ;
    });

    response.on('end', function() {
      console.log('Response stream complete.',result);
    });

  });

};
 getAndPrintHTML();