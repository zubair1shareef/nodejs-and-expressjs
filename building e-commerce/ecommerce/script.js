const cartbtn = document.getElementById("cartbtn");
const cartSection = document.getElementById("Cart-Section");
const toast = document.getElementById("toast");
const toastContainer = document.getElementById("toast-container");
const cardContainer = document.getElementById("card-Container");

cartbtn.addEventListener("click", () => {
  cartSection.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/products")
    .then((data) => {
      console.log(data.data.produucts);
      for (var i = 0; i < data.data.produucts.length; i++) {
        console.log(data.data.produucts[i]);
        createProductCard(data.data.produucts[i]);
      }
    })
    .then(() => {
      addtToCartFunction();
      getCartFromBackEnd()
    });
});

function getCartFromBackEnd(){

    axios.get('http://localhost:3000/cart').then((products)=>{
        let data=products.data

    console.log(data)
    for(let i=0;i<data.length;i++){
        addItemToCart(data[i].title, data[i].price, data[i].imageUrl,data[i].cartItem.quantity)
    }
     


    })

  

}
function addtToCartFunction() {
  const addtoCartBtn = document.getElementsByClassName("add-to-cart-btn");

  for (var i = 0; i < addtoCartBtn.length; i++) {
    var btn = addtoCartBtn[i];
    btn.addEventListener("click", addToCart);
  }
}

function addToCart(e) {
  var button = e.target;
  var shopItem = button.parentElement.parentElement;
  const title = shopItem.getElementsByClassName("title")[0].innerHTML;
  const price = shopItem.getElementsByClassName("price")[0].innerHTML;
  const image = shopItem.getElementsByClassName("productImg")[0].src;
  console.log(title, price, image);
  addItemToCart(title, price, image,1);
  cartSection.classList.add("active");
}






function addItemToCart(title, price, image,qty) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");

  var cartItem = document.getElementsByClassName("cart-items")[0];

  var cartRowContent = `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src=${image}
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value=${qty} />
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;
  cartRow.innerHTML = cartRowContent;
  cartItem.append(cartRow);
 
}

function showToast(name) {
  const noti = document.createElement("div");
  noti.classList.add("toast");
  noti.innerText = `${name}  added`;

  toastContainer.appendChild(noti);

  setInterval(() => {
    noti.remove();
  }, 2000);
}

function createProductCard(data) {
  var card = document.createElement("div");
  card.classList.add("card");

  const producutCart = ` 
        <p class="title">${data.title}</p>
        <img
          class="productImg"
          src=${data.imageUrl}
          alt="image here"
        />
        <div class="price-addtoCart">
          <h3 class="price">$ ${data.price}</h3>
          <button class="add-to-cart-btn" onClick="addtoCartPost('${data.id}','${data.title}')">ADD TO CART</button>
        </div>  `;
  card.innerHTML = producutCart;
  cardContainer.appendChild(card);
}

function addtoCartPost(id,title){
    axios.post('http://localhost:3000/cart',{productId:id}).then((res)=>{
      
    console.log(res)
    if(res.status==200){
        showToast(title);
        
    }
    else{
        showToast("error in ");

    }
   
    })
    .catch((err)=>{
        console.error(err)
    })
}