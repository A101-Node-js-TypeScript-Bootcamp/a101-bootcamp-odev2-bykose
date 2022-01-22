const express = require('express');
let router = express.Router();

const userEndpoint = require('./user/user')
const brandEndpoint=require('./brands/brands')
const categoryEndpoint=require('./categories/categories');

router.use('/user', userEndpoint)
router.use('/brands', brandEndpoint)
router.use('/categories', categoryEndpoint)

module.exports = router;