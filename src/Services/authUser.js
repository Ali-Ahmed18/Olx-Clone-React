const authUser = ()=>{
    const token = localStorage.getItem("authToken")
    const authUserData = JSON.parse(localStorage.getItem("authUser"))
    if(!token || !authUserData){
        return false
    }else{
        return {authUserData,token}
    }
}
export default authUser