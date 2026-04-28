import { useEffect, useState } from "react";
import { api } from "../api/client";
import { useSelector } from "react-redux";
import { TfiCup } from "react-icons/tfi";
import { IoShieldOutline } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from "react-icons/gi";

export const LeaderBoard = () => {
const [data, setData] = useState([]);
const user = useSelector((state) => state.auth.user);

useEffect(() => {
async function loadData() {
try {
const res = await api.get("/leaderboard");
setData(res.data);
} catch (err) {
console.log(err.message);
}
}
loadData();
}, []);

//  Rank Icons (your original colors)
function RankIcon({ rank }) {
if (rank === 1) return <GiPodiumWinner color="#b18d18" size={34} />;
else if (rank === 2) return <GiPodiumSecond color="#728b96" size={34} />;
else if (rank === 3) return <GiPodiumThird color="#ae7c61" size={34} />;
return <span className="text-white">{rank}</span>;
}

//  Tag color logic (your original logic)
function getTagColor(rank) {
const colors = [
"bg-blue-200 text-blue-800",
"bg-yellow-200 text-yellow-800",
"bg-orange-200 text-orange-800",
"bg-green-200 text-green-800",
];
const index = rank % colors.length;
return colors[index];
}

return ( <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] flex flex-col gap-10 p-10 relative">

```
  {/* 🔥 Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px] top-[-100px] left-[-100px]"></div>
    <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[120px] bottom-[-100px] right-[-100px]"></div>
  </div>

  {/* 🏆 Header */}
  <div className="flex gap-4 items-center">
    <div className="bg-gradient-to-r from-cyan-400 to-pink-500 p-4 rounded-xl shadow-lg">
      <TfiCup size={40} color="white" />
    </div>
    <div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Leaderboard
      </h1>
      <p className="text-white/70">Top players ranked by performance</p>
    </div>
  </div>

  {/* 💎 Table */}
  <div className="rounded-2xl w-full overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">

    <table className="w-full text-lg text-white">
      <thead>
        <tr className="bg-gradient-to-r from-violet-600 via-pink-500 to-fuchsia-500 text-white">
          <th className="p-4">#</th>
          <th>Name</th>
          <th><div className="flex items-center gap-2"><TfiCup /> Wins</div></th>
          <th><div className="flex items-center gap-2"><IoShieldOutline /> Losses</div></th>
          <th><div className="flex items-center gap-2"><FaGamepad /> Games</div></th>
          <th><div className="flex items-center gap-2"><AiFillFire /> Streak</div></th>
          <th><div className="flex items-center gap-2"><FaStar /> Rating</div></th>
        </tr>
      </thead>

      <tbody>
        {data.map((u) => (
          <tr
            key={u._id}
            className={`border border-white/10 hover:bg-white/10 transition-all duration-300
            ${
              user?._id?.toString() === u._id.toString()
                ? "bg-gradient-to-r from-cyan-400/20 to-pink-500/20 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            {/* Rank */}
            <td className="p-4">
              <RankIcon rank={u.rank} />
            </td>

            {/* Name */}
            <td>
              <div className="flex gap-2 items-center text-white">
                <FaRegUserCircle size={28} className="text-cyan-300" />
                {u.name}
              </div>
            </td>

            {/* Wins */}
            <td className="text-green-400 font-bold">{u.stats.wins}</td>

            {/* Losses */}
            <td className="text-red-400 font-bold">{u.stats.losses}</td>

            {/* Games */}
            <td>{u.stats.gamesPlayed}</td>

            {/* Streak */}
            <td>
              <div className="flex gap-2 items-center text-orange-400">
                <AiFillFire />
                {u.stats.currentStreak}
              </div>
            </td>

            {/* Rating with getTagColor */}
            <td>
              <div
                className={`${getTagColor(u.rank)} flex gap-2 items-center px-4 py-2 rounded-full font-semibold`}
              >
                <FaStar />
                {u.stats.rating}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
};
