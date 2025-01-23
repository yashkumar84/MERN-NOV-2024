import doNetworkCall from "../service/api-client.js";
import { cartService } from "../service/cartService.js";

window.addEventListener("load", initEvents);
let productDiv;
async function initEvents() {
  productDiv = document.querySelector(".products");
  let data = await doNetworkCall();
  printData(data);
}

function printData(data) {
  data.map((product) => printNewCard(product));
}

function printCard(product) {
  let card = `<div class="card" style="width: 18rem; margin : 10px">
  <img src=${product.image} height="300px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title.substring(0, 10)}</h5>
    <p class="card-text">${product.description.substring(0, 10)}</p>
    <a  class="btn btn-primary">Add To Cart</a>
  </div>
</div>`;
  productDiv.innerHTML += card;
}

function printNewCard(product) {
  const card = document.createElement("div");
  card.style.width = "18rem";
  card.style.margin = "10px";
  card.classList = "card";
  const image = document.createElement("img");
  image.src = product.image;
  image.style.height = "300px";
  image.classList = "card-img-top";
  image.alt = "...";
  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = product.title.substring(0, 10);
  const p = document.createElement("p");
  p.classList = "card-text";
  p.textContent = product.description.substring(0, 10);
  const button = document.createElement("button");
  button.classList = "btn btn-primary";
  button.textContent = "Add To Cart";
  button.onclick = () => cartService.addToCart(product.id);
  cardBody.append(h5, p, button);
  card.append(image, cardBody);
  productDiv.append(card);
}
