const express=require('express');
const router=express.Router()
const contactContoller=require('../controllers/contact');


router.get('/',contactContoller.contact)
module.exports = router