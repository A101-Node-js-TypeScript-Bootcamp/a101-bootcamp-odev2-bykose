const express = require('express');
let router = express.Router();
let userController = require('../../controllers/User')
const validate=require('../../helpers/validation')

router.get('/', userController.fetchUser);
router.post('/', userController.addUser);
router.put('/',userController.put)
router.delete('/',userController.fetchDelete)

//With the "validate" middleware, it is checked whether the information entered while registering complies with the conditions.
router.post("/register",validate,userController.register)
router.post("/login",userController.login)

module.exports = router;