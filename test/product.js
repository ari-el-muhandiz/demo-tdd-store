var request = require('supertest'),
	server = require('../app'),
	Product = require('../db/product'),
    productSeed = require('../db/seeds/product'),
    port = 3001;
	
describe('API', function(){
  before(function(done){
    server.start(port);
    //create dummy data
    Product.collection.insert(productSeed, function(err, products){
      done(err);
    });
  });	

  describe('List', function() {
    it('should show all list of products', function(done){
      request('http://localhost:'+port)
      .get('/api/products')
      .end(function(err, res){
		  res.body.length.should.equal(1)
	    done();
      }); 
    });

  });

  after(function(done) {
	Product.remove({}, function (err) {
	    // collection is now empty but not deleted
	    server.shutdown();
 	   	done(err);
	});
  });
});
