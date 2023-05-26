import { useContext } from "react";
import { Navigate, Outlet } from "react-router";    
//import {UserContext} from "./App"; 
import Login from "../pages/Login";

const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
    
}
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" /> ;
};


export default ProtectedRoutes;