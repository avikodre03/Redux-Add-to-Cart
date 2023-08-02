import { CHECKOUT } from "../ActionTypes";

const checkoutActionCreater=(data)=>{
    return {
        type:CHECKOUT,
        address:data
    }
}
export default checkoutActionCreater;