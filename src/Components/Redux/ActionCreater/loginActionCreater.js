import { LOGIN } from "../ActionTypes";

const loginActonCreater=(data)=>{
    return {
        type:LOGIN,
        loginData:data
    }
}

export default loginActonCreater;