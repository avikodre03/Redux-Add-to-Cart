import { legacy_createStore as createStore } from "redux";
import productReducer from "./ProductReducer";

const productStore=createStore(productReducer);

console.log(productStore.getState());
productStore.subscribe(() => {
    console.log(productStore.getState());
})
export default productStore;