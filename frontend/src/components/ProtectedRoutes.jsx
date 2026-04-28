import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoutes = () => {
    const user = useSelector((state) => state.auth.user);
    const isAutoCkecked = useSelector((state) => state.auth.isAuthenticated);


    if (!isAutoCkecked) {
        return <div>....Loading</div>
    }

    if (!user) {
        return <Navigate to="/login" replace={true} />
    }
    return <Outlet />;
}