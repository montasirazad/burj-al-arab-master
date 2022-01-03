import React from 'react';
import { useContext } from 'react';
import {Navigate, Outlet} from "react-router-dom"
import { userContext } from '../../App';

const PrivateRoute = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return loggedInUser.email ?  <Outlet/> : <Navigate to='/logIn'/>
};

export default PrivateRoute;