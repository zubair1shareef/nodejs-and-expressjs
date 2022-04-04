const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then((produucts)=>{
    res.render('shop/product-list', {
      prods: produucts,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>{
    console.log(err);
  })
 
};

exports.getProduct=(req,res,next)=>{
  const id=req.params.ProductId;
  Product.findByPk(id).then((product)=>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.title,
      path:'/product'
    })

  }).catch(err=>{
    console.log(err)
  })
   

  
}


exports.getIndex = (req, res, next) => {
  Product.findAll().then((products)=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });

  })
  .catch(err=>{
    console.log(err)
  })
 
};
exports.getCart = (req, res, next) => {
  req.user.getCart().then((cart)=>{
    return cart.getProducts().then(product=>{
      console.log(product)
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        product:product
      })
    })

  })
  .catch(err=>{
    console.log(err)
  })

};


exports.postCard=(req,res,next)=>{
  const proId=req.body.productId;
  let fetchCart;
 req.user.getCart().then(cart=>{
   fetchCart=cart;
   return cart.getProducts({where:{id:proId}})

 })
 .then(products=>{
   let product;
   if(products.length > 0){
     product=products[0];
   }
   let newQuantity=1;
   if(product){
     //..

   }
   return Product.findByPk(proId)
   .then(product=>{
     return fetchCart.addProduct(product,{
       through:{quantity:newQuantity}
     })

   })
   
 })
 .then(()=>{
  res.redirect('/cart')
 })
 .catch(err=>{
   console.log(err)
 })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
