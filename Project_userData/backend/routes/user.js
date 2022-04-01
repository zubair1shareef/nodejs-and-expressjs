
const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/',userController.getData)

router.post('/post',userController.postData)
router.post('/post/delete/:Id',userController.postDelete)
router.put('/post/:Id',userController.putedit)

module.exports = router;
