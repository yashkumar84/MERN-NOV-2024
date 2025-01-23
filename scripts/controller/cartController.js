import { cartService } from "../service/cartService.js";

window.addEventListener("load", initEvent);
let cartDiv;
function initEvent() {
  cartDiv = document.querySelector(".cart-products");
  printCart();
}

function addToCart(id) {
  cartService.addToCart(id);
  cartDiv.innerHTML = null;
  printCart();
}

function removeFromCart(id) {
  cartService.removeFromCart(id);
  cartDiv.innerHTML = null;
  printCart();
}

function printCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  if (!cart) {
    cartDiv.innerText = "No Item Present In Cart";
    return;
  }
  console.log(cart, "AFyer");
  cart.map((product) => printCard(product));
}

function printCard(product) {
  console.log(product);
  const card = document.createElement("div");
  card.style.width = "18rem";
  card.style.margin = "10px";
  card.classList = "card";
  const image = document.createElement("img");
  image.src = product.image;
  image.style.height = "200px";
  image.classList = "card-img-top";
  image.alt = "...";
  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = product.title.substring(0, 10);
  const button = document.createElement("button");
  button.classList = "btn btn-danger";
  button.textContent = "Remove";
  button.onclick = () => removeFromCart(product.id);
  cardBody.append(h5, button);
  card.append(image, cardBody);
  cartDiv.append(card);
}
