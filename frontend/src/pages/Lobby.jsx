// import { useState } from "react";
// import { connectSocket, socket } from "../socket";
// import { useNavigate } from "react-router-dom";
// import { AiFillPlusCircle } from "react-icons/ai";
// import { FaPlus } from "react-icons/fa";

// export const Lobby = () => {
//     const [roomCode, setRoomCode] = useState("");
//     const navigate = useNavigate();

//     function createRoom() {
//         connectSocket();
//         socket.emit("room:create", (response) => {
//             if (!response?.ok) return alert(response.message);
//             navigate(`/rooms/${response.room.roomCode}`);
//         });
//     }

//     function joinRoom() {
//         connectSocket();
//         socket.emit("room:join", roomCode, (response) => {
//             if (!response?.ok) return alert(response.message || "Failed to join the room");
//             navigate(`/rooms/${response.room.roomCode}`);
//         });
//     }

//     return (
//         <div
//             className="min-h-screen w-full flex items-center justify-center relative"
//             style={{
//                 backgroundImage: "url('/chess.png')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >
//             {/* Dark overlay for better contrast */}
//             <div className="absolute inset-0 bg-black/60 bg-opacity-0"></div>

//             <div className="flex flex-col justify-center items-center relative z-10 max-w-6xl w-full px-6">
//                 <div className="flex gap-10 mb-8 flex-wrap justify-center">
//                     {/* Create Room Card */}
//                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-[400px] p-8 rounded-3xl flex flex-col gap-6 items-center justify-center transition-transform hover:-translate-y-3 hover:shadow-cyan-500/50">
//                         <AiFillPlusCircle
//                             size={56}
//                             color="#06b6d4"
//                             onClick={createRoom}
//                             className="cursor-pointer transition-transform hover:scale-110"
//                         />
//                         <h2 className="text-3xl text-cyan-500 font-extrabold">Create Room</h2>
//                         <p className="text-lg text-gray-700 w-[80%] text-center font-medium">
//                             Start a new game and share the room code with your opponent
//                         </p>
//                         <button
//                             onClick={createRoom}
//                             className="bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-600 hover:to-teal-500 p-4 rounded-xl text-white font-bold text-xl flex items-center gap-4 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
//                         >
//                             <FaPlus />
//                             Create Room
//                         </button>
//                     </div>

//                     {/* Divider */}
//                     <div className="flex items-center text-white font-bold text-xl select-none">
//                         <div className="h-[150px] border-l border-gray-300/50 mx-6"></div>
//                     </div>

//                     {/* Join Room Card */}
//                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-[400px] p-8 rounded-3xl flex flex-col gap-6 items-center justify-center transition-all duration-300 hover:-translate-y-3 hover:shadow-pink-500/40">
//                         <h2 className="text-3xl text-pink-500 font-extrabold">Join Room</h2>
//                         <p className="text-lg text-gray-700 w-[80%] text-center font-medium mb-4">
//                             Enter a room code to join your friend's game
//                         </p>
//                         <input
//                             className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-lg font-medium"
//                             type="text"
//                             placeholder="ENTER ROOM CODE"
//                             value={roomCode}
//                             onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
//                         />
//                         <button
//                             onClick={joinRoom}
//                             className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 p-4 rounded-xl text-white font-bold text-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 w-full"                        >
//                             Join Room
//                         </button>
//                     </div>
//                 </div>

//                 <p className="text-white absolute top-40 font-semibold text-xl select-none mt-2">OR</p>
//             </div>
//         </div>
//         <div className="howItWorks">
//   <h3>💡 How it works</h3>

//   <div className="steps">
//     <div className="step">
//       <div className="circle blue">1</div>
//       <p>Create or join a room</p>
//     </div>

//     <div className="divider"></div>

//     <div className="step">
//       <div className="circle green">2</div>
//       <p>Wait for an opponent</p>
//     </div>

//     <div className="divider"></div>

//     <div className="step">
//       <div className="circle purple">3</div>
//       <p>Play chess in real-time</p>
//     </div>
//   </div>
// </div>
//     );
// };



import { useState } from "react";
import { connectSocket,socket } from "../socket";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export const Lobby = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  function createRoom() {
    connectSocket();
    socket.emit("room:create", (response) => {
      if (!response?.ok) return alert(response.message);
      navigate(`/rooms/${response.room.roomCode}`);
    });
  }

  function joinRoom() {
    connectSocket();
    socket.emit("room:join", roomCode, (response) => {
      if (!response?.ok)
        return alert(response.message || "Failed to join the room");
      navigate(`/rooms/${response.room.roomCode}`);
    });
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative"
      style={{
        backgroundImage: "url('/chess.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      //Background Glow (ADDED)
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">

        {/* 🔥 WELCOME */}
        <div className="text-center mt-16 mb-10">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full"></div>

            <h1 className="relative text-5xl font-extrabold text-white tracking-wide transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent cursor-pointer">
              Welcome to Chess Arena♟️
            </h1>
          </div>

          <p className="text-gray-300 mt-4 text-lg">
            Create a room or join an existing one to start playing
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="flex gap-10 flex-wrap justify-center">

          {/* CREATE ROOM */}
          <div className="relative group bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-[380px] p-8 rounded-3xl flex flex-col gap-6 items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-cyan-500/60">

            {/* glow layer */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-cyan-500/10 blur-xl"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">

              <AiFillPlusCircle
                size={60}
                className="text-cyan-400 group-hover:scale-110 transition"
                onClick={createRoom}
              />

              <h2 className="text-3xl text-cyan-400 font-extrabold group-hover:text-cyan-300">
                Create Room
              </h2>

              <p className="text-gray-300 text-center">
                Start a new game and share the room code with your opponent
              </p>

              <button
                onClick={createRoom}
                className="bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-600 hover:to-teal-500 px-6 py-3 rounded-xl text-white font-bold flex items-center gap-3 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105"
              >
                <FaPlus />
                Create Room
              </button>
            </div>
          </div>

          {/* OR */}
          <div className="flex items-center text-white font-bold text-xl">
            OR
          </div>

          {/* JOIN ROOM */}
          <div className="relative group bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-[380px] p-8 rounded-3xl flex flex-col gap-6 items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-pink-500/60">

            {/* glow layer */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-500/10 blur-xl"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">

              <h2 className="text-3xl text-pink-400 font-extrabold group-hover:text-pink-300">
                Join Room
              </h2>

              <p className="text-gray-300 text-center">
                Enter a room code to join your friend's game
              </p>

              <input
                className="w-full p-3 border border-gray-300/30 bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400"
                type="text"
                placeholder="ENTER ROOM CODE"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              />

              <button
                onClick={joinRoom}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-xl text-white font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/60 transition-all duration-300 hover:scale-105 w-full"
              >
                Join Room
              </button>
            </div>
          </div>

        </div>

        {/* 🔥 HOW IT WORKS */}
        <div className="mt-16 w-full max-w-5xl relative">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl"></div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl">

            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              💡 <span className="text-cyan-400">How it works</span>
            </h3>

            <div className="flex items-center justify-between flex-wrap gap-6">

              <div className="group flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-bold shadow-lg group-hover:scale-110 transition">
                  1
                </div>
                <p className="transition group-hover:text-cyan-300">
                  Create or join a room
                </p>
              </div>

              <div className="hidden md:block flex-1 h-[2px] bg-white/20"></div>

              <div className="group flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 font-bold shadow-lg group-hover:scale-110 transition">
                  2
                </div>
                <p className="transition group-hover:text-green-300">
                  Wait for an opponent
                </p>
              </div>

              <div className="hidden md:block flex-1 h-[2px] bg-white/20"></div>

              <div className="group flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 font-bold shadow-lg group-hover:scale-110 transition">
                  3
                </div>
                <p className="transition group-hover:text-pink-300">
                  Play chess in real-time
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};