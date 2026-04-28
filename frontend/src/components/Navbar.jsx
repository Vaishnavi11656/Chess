import { Link, NavLink, Outlet } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaSignOutAlt, FaChessKnight, FaTrophy, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

    const linkClasses = "flex items-center gap-1 text-white font-semibold hover:text-cyan-400 transition-colors";

    const buttonClasses =
        "flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-600 hover:to-teal-500 text-white px-3 py-2 rounded-xl font-bold shadow-lg transition-transform hover:scale-105";

    return (
        <div>
            {/* Navbar */}
            <div className="p-4 bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 flex flex-row justify-between items-center shadow-xl">
                {/* Left: Lobby Link with Chess Icon */}
                <div className="flex items-center gap-2">
                    <FaChessKnight size={24} className="text-white" />
                    <Link to="/lobby" className="text-white font-bold text-xl hover:text-cyan-300 transition-colors">
                        Lobby
                    </Link>
                </div>

                {/* Right: User Links */}
                <div className="flex gap-4 items-center">
                    {user ? (
                        <>
                            <NavLink to="/leaderboard" className={linkClasses}>
                                <FaTrophy /> Leaderboard
                            </NavLink>
                            <NavLink to="/profile" className={linkClasses}>
                                <FaUser /> Profile
                            </NavLink>
                            <button onClick={handleLogout} className={buttonClasses}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className={buttonClasses}>
                                <FaSignInAlt /> Login
                            </Link>
                            <Link to="/signup" className={buttonClasses}>
                                <FaUserPlus /> Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Outlet for child pages */}
            <div>
                <Outlet />
            </div>
        </div>
    );
};
 