import { PROFILE } from "../ActionTypes"

const profileActionCreater=(data)=>{
    return{
        type:PROFILE,
        profileData:data
    }
}

export default profileActionCreater;