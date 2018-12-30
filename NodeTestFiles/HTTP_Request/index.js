//based on info from https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html and https://docs.nodejitsu.com/articles/HTTP/servers/how-to-read-POST-data/

const request = require('request');
const http = require('http');
const port = 3000;

var postHTML =
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
    res.writeHead(200);

    if(body != null) {
          request(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
          {json: true},
          (err, res, body) => {
            console.log(body.url);

            postHTML = '<html><head><title>Post Example</title></head>' +
            '<body>'+
            '<img src='+body.url+' alt="astronomy things" />'+
            '<p>'+body.explanation+'</p>'+
            '</body></html>';
          });
    }


    res.end(postHTML);
  });

}).listen(3000);
