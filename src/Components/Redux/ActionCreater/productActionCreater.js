import { PRODUCTS } from "../ActionTypes"

const productActionCreater=(data)=>{
    return {
        type:PRODUCTS,
        payload:data
    }
}
export default productActionCreater;