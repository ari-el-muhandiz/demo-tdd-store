"use strict";

require('./config/initializer');

var app     = MODULES.express(),
	router = require('./middleware/routes');
	
app.use('/api', router)

//app.listen(3000);

//server = rq.http.createServer(app);

function start(port) {
  app.listen(port);
};

function shutdown() {
  app.close();
};

if(require.main === module)
	start(3000);
else {
  exports.start = start;
  exports.shutdown = shutdown;
}
