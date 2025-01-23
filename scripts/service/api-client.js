import { constants } from "../../constants/constant.js";
import Product from "../model/model.js";
import { productsService } from "./service.js";

async function doNetworkCall() {
  const response = await fetch(constants.API_URL);
  let data = await response.json();
  data = data.map(
    (obj) =>
      new Product(obj.id, obj.title, obj.description, obj.image, obj.price)
  );
  productsService.products = [...data];
  return data;
}

export default doNetworkCall;
