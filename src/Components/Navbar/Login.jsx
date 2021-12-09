import React from 'react'
import {Appcontext} from '../../context/appcontext'
import {Redirect} from 'react-router-dom'
function Login(){
    const {isAuth,Login} = React.useContext(Appcontext)
    if(isAuth){
        return <Redirect to="/dashboard" />
    }
    return(
        <div>
            login
            <button onClick={Login}>Log in</button>
        </div>
    )
}
export default Login