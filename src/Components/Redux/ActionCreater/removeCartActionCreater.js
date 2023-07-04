import { REMOVECART } from "../ActionTypes"

const removeCartActionCreater=(id)=>{
    return {
        type:REMOVECART,
        removeCart:id
    }
}

export default removeCartActionCreater;