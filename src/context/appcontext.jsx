import React from 'react'
export const Appcontext = React.createContext();
function AppcontextProvider({children}){
    const [isAuth,setAuth] = React.useState(false);
    function Login() {
        if(!isAuth){
            setAuth(true);
        }
    }
    function Logout(){
        if(isAuth){
            setAuth(false);
        }
    }
    const value = {Login,Logout,isAuth};
    return(
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}
export default AppcontextProvider
