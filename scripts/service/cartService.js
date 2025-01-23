import { productsService } from "./service.js";

export const cartService = {
  cart: [],
  addToCart: function (id) {
    const exist = this.cart.find((obj) => obj.id === id);
    if (exist) {
      alert("Already Added To Cart");
      return;
    }
    const cartProduct = productsService.products.find((obj) => obj.id === id);
    console.log("Cart Products ", cartProduct);
    this.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    console.log("Cart", this.cart);
    this.cart.push(cartProduct);

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  removeFromCart: function (id) {
    this.cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const exist = this.cart.find((obj) => obj.id === id);
    if (!exist) {
      alert("Item Not Exists");
      return;
    }

    this.cart = this.cart.filter((obj) => obj.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },
};
