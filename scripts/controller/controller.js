import doNetworkCall from "../service/api-client.js";

window.addEventListener("load", initEvents);
let productDiv;
async function initEvents() {
  productDiv = document.querySelector(".products");
  let data = await doNetworkCall();
  printData(data);
}

function printData(data) {
  data.map((product) => printCard(product));
}

function printCard(product) {
  let card = `<div class="card" style="width: 18rem; margin : 10px">
  <img src=${product.image} height="300px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title.substring(0, 10)}</h5>
    <p class="card-text">${product.description.substring(0, 10)}</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>`;
  productDiv.innerHTML += card;
}
