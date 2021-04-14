//更改用户状态信息
export const userStatus = (state,user) => {
    if(user){
        state.currentUser = user
        state.isLogin = true
    }else if(user == null){
        //登出时清空sessionStorage信息
        sessionStorage.setItem("userName",null);
        sessionStorage.setItem("userToken","");
        state.currentUser = null;
        state.isLogin = false;
        state.token = "";
    }
}