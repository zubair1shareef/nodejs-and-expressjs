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
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCard=(req,res,next)=>{
  const proId=req.body.productId;
  console.log(proId);
  Product.findById(proId,(product=>{
    Cart.addProduct(proId,product.price)
  }))
  res.redirect('/card')
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
