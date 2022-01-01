import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    
    const [loggedInUser, setLoggedInUser] = userContext(userContext);
     if (loggedInUser.email && loggedInUser.isLogged) {
         return children
     }

     return <Navigate to='/login' />
};

export default PrivateRoute;