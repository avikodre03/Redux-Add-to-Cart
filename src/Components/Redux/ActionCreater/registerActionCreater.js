import { REGISTER } from "../ActionTypes";

const registerActionCreater=(data)=>{
    return {
        type:REGISTER,
        registerData:data
    }
}
export default registerActionCreater;