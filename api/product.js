var Product = require('../db/product');

module.exports.list = function(req, res) {
	Product.find({}, function(err, products) {
		res.status(200).json(products);
	});
}

module.exports.create = function(req, res) {
	Product.findById  ;
}

module.exports.destroy = function(req, res) {

}

module.exports.update = function(req, res) {
	
}

module.exports.detail = function(req, res) {

}