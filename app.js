"use strict";

require('./config/initializer');

var app    = MODULES.express(),
	router = require('./middleware/routes'),
    http   = require('http'),
    server;

app.use('/api', router)

server = http.createServer(app);

function start(port) {
  server.listen(port);
};

function shutdown() {
  server.close();
};

if(require.main === module)
	start(3000);
else {
  exports.start = start;
  exports.shutdown = shutdown;
}
