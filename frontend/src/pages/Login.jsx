//import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMe, login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        //dispatch(login({ email, password }));
        try {
            await dispatch(login({ email, password })).unwrap();
            await dispatch(fetchMe()).unwrap();
            //nodification using notistack
            //redirect to the /lobby page
            navigate("/lobby");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center 
                  bg-gradient-to-br from-[#0b1120] via-[#1e1b4b] to-[#020617]">

            <div className="w-[90%] max-w-md p-10 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-[0_0_40px_rgba(0,0,0,0.6)]">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-white text-center mb-8">
                    Welcome Back
                </h2>

                {error && (
                    <div className="mb-4 p-3 
            bg-red-200/80 border border-red-500 text-red-800 
            rounded text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-white/80">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="bg-white/10 border border-white/20 
              rounded-md px-4 py-2 text-white 
              placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-cyan-400 
              transition"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm text-white/80">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="bg-white/10 border border-white/20 
              rounded-md px-4 py-2 text-white 
              placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-pink-400 
              transition"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="mt-2 py-2 rounded-md font-medium 
            bg-gradient-to-r from-cyan-400 to-pink-500 
            hover:from-cyan-500 hover:to-pink-600 
            transition"
                    >
                        Login
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6 text-white/50 text-sm">
                    <div className="flex-1 h-px bg-white/20"></div>
                    OR
                    <div className="flex-1 h-px bg-white/20"></div>
                </div>

                {/* Guest Button */}
                <button
                    onClick={() => navigate("/guest")}
                    className="w-full py-2 rounded-md 
          bg-gradient-to-r from-purple-500 to-fuchsia-500 
          hover:from-purple-600 hover:to-fuchsia-600 
          transition"
                >
                    Continue as Guest
                </button>

            </div>
        </div>
    );
}