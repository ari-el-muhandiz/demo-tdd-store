//module to connect with mongodb
var mongoose = require('mongoose');

mongoose.connect(CONFIG.mongoose_path);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', console.log.bind(console, 'Mongoose default connection open to ' + CONFIG.mongoose_path)); 

// If the connection throws an error
mongoose.connection.on('error', console.error.bind(console, 'connection error:')); 

// When the connection is disconnected
mongoose.connection.on('disconnected', console.log.bind(console, 'Mongoose default connection disconnected'));

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 


module.exports = mongoose;