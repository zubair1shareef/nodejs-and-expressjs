const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports=class Cart{
    static addProduct(id,productPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart={product:[],totalPrice:0}
            if(!err){
                cart=JSON.parse(fileContent)

            }
            const existingProuctIndex=cart.product.findIndex(prod=>prod.id==    id);
            const existingProuct=cart.product[existingProuctIndex]
            let updatedProduct;
            if(existingProuct){
                updatedProduct={...existingProuct}
                updatedProduct.qty=updatedProduct.qty+1;
                cart.product=[...cart.product];
                cart.product[existingProuctIndex]=updatedProduct;
            }
            else{
                updatedProduct={id:id,qty:1}
                cart.product=[...cart.product,updatedProduct]

            }
            cart.totalPrice=cart.totalPrice+productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err)
            })
        })
    }
}