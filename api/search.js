var request = require('request');


request('https://api.openbrewerydb.org/breweries/search?query=dog', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); 
})