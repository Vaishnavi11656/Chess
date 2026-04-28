export const Guest = () => {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const guestData = {
            id: Date.now().toString(),
            name,
        };
        localStorage.setItem("guest", JSON.stringify(guestData));
        window.location.href = "/lobby";
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">

            <div className="w-[400px] md:w-[500px] bg-slate-900/80 backdrop-blur-xl 
                    border border-green-500/30 rounded-3xl p-12 
                    shadow-[0_0_50px_rgba(34,197,94,0.25)]">

                <h1 className="text-3xl text-green-400 font-bold mb-8 text-center tracking-wide">
                    🎮 Enter Game
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="px-5 py-3 text-lg rounded-xl bg-black/60 text-white 
                     border border-green-500/30 
                     focus:outline-none focus:ring-2 focus:ring-green-400 
                     placeholder-gray-400"
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 text-lg rounded-xl font-semibold 
                     text-green-400 border border-green-400 
                     transition-all duration-300 
                     hover:bg-green-400 hover:text-black 
                     hover:shadow-[0_0_25px_#22c55e] 
                     active:scale-95"
                    >
                        ♟️ Join as Guest
                    </button>

                </form>
            </div>
        </div>
    );
};