import { CHANGEQUENTITY } from "../ActionTypes"

const quantityActionCreater=(id,updateQuentity)=>{
    return {
        type:CHANGEQUENTITY,
        quentity:{id,updateQuentity}
    }
}

export default quantityActionCreater;