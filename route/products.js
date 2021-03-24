const express=require('express');
const {getproducts,insertproduct, deleteproducts}=require('../logic/products');
const router=express.Router();
router.get('/',getproducts);
router.post('/',insertproduct)
router.delete('/:id',deleteproducts)
module.exports=router;