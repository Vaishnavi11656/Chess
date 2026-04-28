import { signup } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        try {
            await dispatch(signup({ name, email, password })).unwrap();
            //nodification using notistack
            navigate("/login");
        } catch (err) {
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
        Create Account
      </h2>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/80">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="bg-white/10 border border-white/20 
              rounded-md px-4 py-2 text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/80">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="bg-white/10 border border-white/20 
              rounded-md px-4 py-2 text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/80">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="bg-white/10 border border-white/20 
              rounded-md px-4 py-2 text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 py-2 rounded-md font-medium 
            bg-gradient-to-r from-cyan-400 to-pink-500 
            hover:from-cyan-500 hover:to-pink-600 
            transition"
        >
          Sign Up
        </button>

      </form>

      {/* Footer */}
      <p className="text-sm text-white/60 text-center mt-6">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-pink-400 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>

    </div>
  </div>
);
};