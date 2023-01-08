import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import usePublisher from "../Hooks/usePublisher";

const PublisherRoute = ({ children }) => {
    const { user, loading, } = useContext(AuthContext);
    const [isPublisher, isPublisherLoading] = usePublisher(user?.email)
    const location = useLocation();
    if (loading || isPublisherLoading) {
        return
    }
    if (user?.email && isPublisher) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PublisherRoute;
