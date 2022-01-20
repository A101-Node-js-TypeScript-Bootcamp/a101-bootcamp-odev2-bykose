const express = require('express');
let router = express.Router();
let brandController = require('../../controllers/Brands')

router.get('/', brandController.fetchBrand);

//Returns the name parameter from the url as req.params.name
router.get('/brand/:name', brandController.fetchBrandWithName);

module.exports = router;