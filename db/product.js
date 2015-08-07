var mongoose = MODULES.mongoose;

var ProductSchema = new mongoose.Schema({
	code: String,
	name: String,
	slug: String,
	description: String,
	price: Number
});

mongoose.model('Product', ProductSchema)

var Product = mongoose.model('Product');
 
module.exports = Product;