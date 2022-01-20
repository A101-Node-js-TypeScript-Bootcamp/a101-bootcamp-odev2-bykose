const express = require('express');
let router = express.Router();
let categoryController = require('../../controllers/Categories')

router.get('/', categoryController.fetchCategory);

//Returns the id parameter from the url as req.params.id
router.get('/category/:id', categoryController.fetchSingleCategory);


module.exports = router;