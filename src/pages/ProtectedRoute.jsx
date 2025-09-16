import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(
        function () {
            if (!isAuthenticated) navigate("/");
        },
        [isAuthenticated, navigate]
    );

    // Effects run after the render so we have to return conditionally the children otherwise the app layout will still be rendered
    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
