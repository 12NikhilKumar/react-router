import React from 'react'
import {Appcontext} from '../../context/appcontext';
import {Redirect,Route} from 'react-router-dom';
function Private({path,exact,children}) {
    const {isAuth} = React.useContext(Appcontext);
    if(!isAuth){
        return <Redirect  to="/login"/>
    }
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}

export default Private