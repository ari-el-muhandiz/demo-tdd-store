'use strict';

var ENV = {
	development: {
		mongoose_path: 'mongodb://localhost:27017/store_development'
	},
	
	production: {
		mongoose_path: 'mongodb://localhost:27017/store_production'
	},
	
	test: {
		mongoose_path: 'mongodb://localhost:27017/store_test'
	}
}

module.exports = ENV;