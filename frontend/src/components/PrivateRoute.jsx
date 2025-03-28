import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Children } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Carregando...</p>;
    return user ? Children : <Navigate to="/Login"/>;
};

export default PrivateRoute;