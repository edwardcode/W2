




module.exports = function getHTML (options, callback) {
    /* Your code here */

  var result = '';
  var https = require('https');


  /* Add your code here */
  https.get(options, function (response) {

     response.setEncoding('utf8');

     response.on('data', function (data) {
     result += data ;

     });

     response.on('end', function() {
        console.log('Response stream complete.');
        callback(result);

     });

   });

};



