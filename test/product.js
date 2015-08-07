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
      .expect('Content-Type', /json/)
      .expect('Content-Length', '20')
      .expect(200)
      .end(function(err, res){
        console.log(res.body);
        done();
      }); 
    });

  });

  after(function() {
    server.shutdown();
  });
});
