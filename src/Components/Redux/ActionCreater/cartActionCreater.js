import { CART } from "../ActionTypes"

const cartActionCreater=(data)=>{
    return {
        type:CART,
        payload:data
    }
}

export default cartActionCreater;