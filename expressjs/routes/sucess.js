const express=require('express');
const router=express.Router()
const sucessController=require('../controllers/sucess')

router.get('/',sucessController.sucess)

module.exports=router