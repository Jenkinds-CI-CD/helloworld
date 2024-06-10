var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})
//AAAdded a comment to check for auto build to work
   /// wanting to see if this works Send the response body as "Hello World"
   response.end('Hello World\n')
}).listen(3333)

// Console will print the message
console.log('Server running')
