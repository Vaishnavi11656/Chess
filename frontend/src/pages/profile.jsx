// import { useState, useEffect } from "react";
// import { api } from "../api/client"; // your axios instance

// export const Profile = () => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [user, setUser] = useState(null);
//   const [history, setHistory] = useState([]);




//   useEffect(() => {
//     // existing profile call
//     api.get("/user/profile")
//       .then((res) => {
//         setUser(res.data.user);

//         if (res.data.user.avatar) {
//           setPreview(res.data.user.avatar);
//         }
//       })
//       .catch((err) => console.error(err));

//     //  ADD THIS (history API)
//     api.get("/game/history")
//       .then((res) => {
//         setHistory(res.data.games);
//       })
//       .catch((err) => console.error(err));

//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) return alert("Select a file first");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await api.post("/uploads", formData);
//       setPreview(res.data.avatar);
//       setUser(prev => ({ ...prev, avatar: res.data.avatar }));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleFileChange = (e) => {
//     const selected = e.target.files[0];
//     setFile(selected);

//     if (selected) {
//       setPreview(URL.createObjectURL(selected));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0b1120] text-white">

//       {/* ===== HEADER ===== */}
//       <div className="border-b border-slate-800 px-8 py-6 flex items-center justify-between">

//         <div className="flex items-center gap-5">
//           <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-700">
//             {preview ? (
//               <img src={preview} className="w-full h-full object-cover" />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center">
//                 {user?.name?.charAt(0)}
//               </div>
//             )}
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold">{user?.name}</h2>
//             <p className="text-sm text-slate-400">{user?.email}</p>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//             id="fileInput"
//           />

//           <label
//             htmlFor="fileInput"
//             className="px-4 py-2 bg-slate-700 rounded-md cursor-pointer hover:bg-slate-600"
//           >
//             Change Avatar
//           </label>

//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
//           >
//             Upload
//           </button>
//         </div>

//       </div>

//       {/* ===== MAIN ===== */}
//       <div className="max-w-6xl mx-auto px-8 py-10">

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

//           <div className="bg-slate-800 rounded-lg p-5">
//             <p className="text-sm text-slate-400">Wins</p>
//             <p className="text-2xl font-semibold text-green-400">
//               {user?.stats?.wins || 0}
//             </p>
//           </div>

//           <div className="bg-slate-800 rounded-lg p-5">
//             <p className="text-sm text-slate-400">Losses</p>
//             <p className="text-2xl font-semibold text-red-400">
//               {user?.stats?.losses || 0}
//             </p>
//           </div>

//           <div className="bg-slate-800 rounded-lg p-5">
//             <p className="text-sm text-slate-400">Draws</p>
//             <p className="text-2xl font-semibold text-yellow-400">
//               {user?.stats?.draws || 0}
//             </p>
//           </div>

//           <div className="bg-slate-800 rounded-lg p-5">
//             <p className="text-sm text-slate-400">Rating</p>
//             <p className="text-2xl font-semibold text-blue-400">
//               {user?.stats?.rating || 1200}
//             </p>
//           </div>

//         </div>

//         {/* PERFORMANCE */}
//         <div className="grid md:grid-cols-2 gap-8 mb-10">

//           {/* Rating Progress */}
//           <div className="bg-slate-800 rounded-lg p-6">
//             <p className="text-sm text-slate-400 mb-3">Rating Progress</p>

//             <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-blue-500 transition-all"
//                 style={{
//                   width: `${Math.min((user?.stats?.rating || 1200) / 2000 * 100, 100)}%`
//                 }}
//               />
//             </div>

//             <p className="text-right text-sm text-slate-400 mt-2">
//               {user?.stats?.rating || 1200}
//             </p>
//           </div>

//           {/* Win Rate */}
//           <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-between">
//             <div>
//               <p className="text-sm text-slate-400">Win Rate</p>
//               <p className="text-xl font-semibold text-green-400">
//                 {user?.stats
//                   ? Math.round(
//                     (user.stats.wins /
//                       Math.max(
//                         user.stats.wins +
//                         user.stats.losses +
//                         user.stats.draws,
//                         1
//                       )) * 100
//                   )
//                   : 0}%
//               </p>
//             </div>

//             <div className="text-right">
//               <p className="text-sm text-slate-400">Games</p>
//               <p className="text-lg font-semibold">
//                 {user?.stats?.gamesPlayed || 0}
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* ACTIVITY (placeholder for future) */}
//         <div className="bg-slate-800 rounded-lg p-6">
//           <p className="text-sm text-slate-400 mb-4">Recent Activity</p>

//           <div className="text-slate-500 text-sm">
//             No recent matches yet
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { api } from "../api/client";

export const Profile = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/user/profile")
      .then((res) => {
        setUser(res.data.user);
        if (res.data.user.avatar) {
          setPreview(res.data.user.avatar);
        }
      })
      .catch((err) => console.error(err));

    api.get("/game/history")
      .then((res) => {
        setHistory(res.data.games);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select a file first");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await api.post("/uploads", formData);
      setPreview(res.data.avatar);
      setUser(prev => ({ ...prev, avatar: res.data.avatar }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const winRate = user?.stats
    ? Math.round((user.stats.wins / Math.max(user.stats.wins + user.stats.losses + user.stats.draws, 1)) * 100)
    : 0;

  const ratingPct = Math.min(((user?.stats?.rating || 1200) / 2000) * 100, 100);

  // Inject Google Fonts once
  if (typeof document !== "undefined" && !document.getElementById("profile-fonts")) {
    const link = document.createElement("link");
    link.id = "profile-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0b1120, #1e1b4b, #020617)",
      fontFamily: "'Barlow', sans-serif",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* === MESH BACKGROUND === */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 80% 50% at 15% -5%, rgba(139,92,246,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 60% 45% at 85% 105%, rgba(236,72,153,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%),
          #0b1120
        `,
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* === BANNER === */}
        <div style={{
          position: "relative", height: "170px",
          background: "linear-gradient(110deg, #130a2e 0%, #1c0a3a 45%, #0d0820 100%)",
          overflow: "hidden",
        }}>
          {/* Glow blobs */}
          <div style={{ position: "absolute", top: "-70px", left: "-50px", width: "380px", height: "270px", background: "radial-gradient(ellipse, rgba(139,92,246,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-50px", right: "-70px", width: "320px", height: "240px", background: "radial-gradient(ellipse, rgba(236,72,153,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "40px", left: "40%", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          {/* Dot texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }} />
          {/* Bottom stripe */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #ec4899, #f0abfc, #22d3ee)",
          }} />

          {/* Rank badge */}
          <div style={{
            position: "absolute", top: "16px", right: "20px",
            display: "flex", alignItems: "center", gap: "10px",
            background: "rgba(139,92,246,0.14)",
            border: "1px solid rgba(139,92,246,0.35)",
            borderRadius: "6px", padding: "8px 14px",
          }}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <defs>
                <linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <polygon points="13,2 16,9 24,9 18,14 20,22 13,18 6,22 8,14 2,9 10,9" fill="url(#rgrad)" />
            </svg>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "14px", fontWeight: "700", color: "#a78bfa", letterSpacing: "1px", textTransform: "uppercase", lineHeight: 1 }}>Gold II</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "10px", color: "rgba(167,139,250,0.5)", letterSpacing: "0.5px", marginTop: "2px" }}>TOP 18%</div>
            </div>
          </div>
        </div>

        {/* === PROFILE ROW === */}
        <div style={{ display: "flex", alignItems: "flex-end", padding: "0 24px", marginTop: "-46px", position: "relative", zIndex: 2 }}>

          {/* Avatar */}
          <div style={{
            width: "92px", height: "92px",
            borderRadius: "8px",
            border: "3px solid #0a0612",
            background: "#180d35",
            overflow: "hidden", flexShrink: 0, position: "relative",
            boxShadow: "0 0 0 1px rgba(139,92,246,0.45), 0 8px 32px rgba(139,92,246,0.35)",
          }}>
            {preview
              ? <img src={preview} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avatar" />
              : <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(135deg, #2e1065, #1e1050)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "36px", fontWeight: "800", color: "#a78bfa",
              }}>
                {user?.name?.charAt(0) || "?"}
              </div>
            }
            <div style={{
              position: "absolute", bottom: "-1px", left: "50%", transform: "translateX(-50%)",
              background: "linear-gradient(90deg, #7c3aed, #ec4899)",
              borderRadius: "3px", padding: "2px 8px",
              fontSize: "9px", fontWeight: "700",
              fontFamily: "'Barlow Condensed',sans-serif",
              letterSpacing: "0.5px", whiteSpace: "nowrap", color: "#fff",
            }}>LVL 42</div>
            <div style={{
              position: "absolute", top: "6px", right: "6px",
              width: "10px", height: "10px", borderRadius: "50%",
              background: "#22d3ee",
              boxShadow: "0 0 8px rgba(34,211,238,0.9)",
            }} />
          </div>

          {/* Name + buttons */}
          <div style={{ flex: 1, padding: "0 16px 10px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "28px", fontWeight: "800",
                letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 1,
                background: "linear-gradient(90deg, #e0d7ff, #f9a8d4, #22d3ee)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{user?.name || "Player"}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.32)", marginTop: "4px" }}>
                {user?.email}&nbsp;·&nbsp;Member since 2023
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", paddingBottom: "10px" }}>
              <input type="file" onChange={handleFileChange} style={{ display: "none" }} id="fileInput" />
              <label htmlFor="fileInput" style={{
                padding: "8px 14px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "6px", cursor: "pointer",
                fontSize: "11px", fontWeight: "600",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'Barlow Condensed',sans-serif",
                letterSpacing: "0.8px", textTransform: "uppercase",
              }}>Change Avatar</label>
              <button onClick={handleSubmit} style={{
                padding: "8px 18px",
                background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                border: "none", borderRadius: "6px", cursor: "pointer",
                fontSize: "11px", fontWeight: "700", color: "#fff",
                fontFamily: "'Barlow Condensed',sans-serif",
                letterSpacing: "1px", textTransform: "uppercase",
                boxShadow: "0 4px 20px rgba(139,92,246,0.45)",
              }}>Upload</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px", margin: "16px 24px 0",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25), rgba(236,72,153,0.25), transparent)",
        }} />

        {/* === BODY === */}
        <div style={{ padding: "16px 24px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* STAT CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
            {[
              { label: "Wins", value: user?.stats?.wins || 0, color: "#22d3ee", glow: "34,211,238", bar: "74%", sub: "+12 this week", grad: "linear-gradient(180deg,#22d3ee,#06b6d4)" },
              { label: "Losses", value: user?.stats?.losses || 0, color: "#ec4899", glow: "236,72,153", bar: "20%", sub: "-3 this week", grad: "linear-gradient(180deg,#ec4899,#be185d)" },
              { label: "Draws", value: user?.stats?.draws || 0, color: "#a78bfa", glow: "167,139,250", bar: "12%", sub: "+1 this week", grad: "linear-gradient(180deg,#a78bfa,#7c3aed)" },
              { label: "Rating", value: user?.stats?.rating || 1200, color: "#f0abfc", glow: "240,171,252", bar: `${ratingPct}%`, sub: "+80 this week", grad: "linear-gradient(180deg,#f0abfc,#ec4899)" },
            ].map(({ label, value, color, glow, bar, sub, grad }) => (
              <div key={label} style={{
                background: `rgba(${glow},0.05)`,
                border: `1px solid rgba(${glow},0.2)`,
                borderRadius: "8px", padding: "16px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: grad, borderRadius: "8px 0 0 8px" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: `radial-gradient(circle at top right, rgba(${glow},0.18), transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ fontSize: "9px", fontWeight: "600", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "8px", fontFamily: "'Barlow Condensed',sans-serif" }}>{label}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "32px", fontWeight: "800", lineHeight: 1, letterSpacing: "-0.5px", color }}>{value}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", marginTop: "4px" }}>{sub}</div>
                <div style={{ position: "absolute", bottom: 0, left: 0, height: "2px", width: bar, background: color, borderRadius: "0 2px 2px 0" }} />
              </div>
            ))}
          </div>

          {/* BOTTOM GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "12px" }}>

            {/* Left col */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              {/* Win Rate */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", padding: "16px", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(34,211,238,0.45),transparent)" }} />
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>Win Rate</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed',sans-serif", fontSize: "50px", fontWeight: "800",
                    lineHeight: 1, letterSpacing: "-2px",
                    background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{winRate}</span>
                  <span style={{ fontSize: "20px", color: "rgba(34,211,238,0.4)", fontWeight: "700" }}>%</span>
                </div>
                <div style={{ display: "flex", height: "5px", borderRadius: "3px", overflow: "hidden", gap: "2px", marginTop: "14px" }}>
                  <div style={{ background: "#22d3ee", borderRadius: "3px", flex: Math.max(user?.stats?.wins || 1, 1) }} />
                  <div style={{ background: "#a78bfa", borderRadius: "3px", flex: Math.max(user?.stats?.draws || 0, 0), minWidth: user?.stats?.draws ? 2 : 0 }} />
                  <div style={{ background: "#ec4899", borderRadius: "3px", flex: Math.max(user?.stats?.losses || 1, 1) }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                  {[["#22d3ee", `${user?.stats?.wins || 0}W`], ["#a78bfa", `${user?.stats?.draws || 0}D`], ["#ec4899", `${user?.stats?.losses || 0}L`]].map(([color, label]) => (
                    <span key={label} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "10px", color: "rgba(255,255,255,0.28)" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, display: "inline-block" }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating progress */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", padding: "16px", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(240,171,252,0.45),transparent)" }} />
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "10px" }}>Rating</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed',sans-serif", fontSize: "38px", fontWeight: "800",
                    lineHeight: 1, letterSpacing: "-1px",
                    background: "linear-gradient(90deg, #f0abfc, #ec4899)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{user?.stats?.rating || 1200}</span>
                  <span style={{ fontSize: "14px", color: "rgba(240,171,252,0.3)", fontWeight: "600" }}>/ 2000</span>
                </div>
                <div style={{ height: "5px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "linear-gradient(90deg, #7c3aed, #a855f7, #f0abfc, #ec4899)", borderRadius: "3px", width: `${ratingPct}%` }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                  {["Bronze", "Silver", "Gold", "Plat"].map(t => (
                    <span key={t} style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col — Activity */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "8px", padding: "18px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.4),rgba(236,72,153,0.4),transparent)" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                  Recent Activity
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "10px", color: "#22d3ee", fontWeight: "700", letterSpacing: "1px" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 6px rgba(34,211,238,0.8)", display: "inline-block" }} />
                  LIVE
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 0", gap: "10px" }}>
                <div style={{
                  width: "60px", height: "60px", borderRadius: "14px",
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="8" width="20" height="12" rx="3" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5" />
                    <path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5" />
                    <circle cx="12" cy="14" r="2" stroke="rgba(34,211,238,0.55)" strokeWidth="1.5" />
                    <path d="M6 14H10M14 14H18" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.3px" }}>No recent matches yet</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)" }}>Play a match to see your history here</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};