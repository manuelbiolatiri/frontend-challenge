import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";

export const authenticationService = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.jwt !== undefined ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
        };

        export const getUser = () => {
            const jwt = window.localStorage.getItem("currentUser");
                const user = jwtDecode(jwt);
            return (
                user
                
            );
        };

        export const getUserToken = () => {
            const jwt = window.localStorage.getItem("currentUser");
                const user = jwtDecode(jwt);
                console.log(JSON.parse(user))
            return (
                JSON.parse(user)
                
            );
        };


        
// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (

//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /signin page
//         <Route {...rest} render={props => (
//             localStorage.jwt !== undefined ?
//                 <Component {...props} />
//             : <Redirect to="/" />
//         )} />
//     );
// };

// export default ProtectedRoute;
