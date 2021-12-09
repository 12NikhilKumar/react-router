import React from 'react'
import {Appcontext} from '../../context/appcontext'
import {Redirect} from 'react-router-dom'
function Dashboard() {
    const {isAuth,Logout} = React.useContext(Appcontext);
    if(!isAuth){
        return <Redirect  to="/login"/>
    }
    return (
        <div>
            Dashboard
            <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Dashboard