var router = MODULES.express.Router(),
	ProductAPI = require('../api/product');

router.get('/products', ProductAPI.list);

router.post('/products', ProductAPI.create);


module.exports = router;