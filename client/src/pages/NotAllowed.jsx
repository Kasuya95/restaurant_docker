import React, { useEffect, useState } from "react";

const colors = ["#f87171", "#fb923c", "#facc15", "#34d399", "#60a5fa", "#a78bfa"];

const NotAllowed = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * -100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 4;
      setConfetti((prev) => [...prev, { x, y, color, size, id: Date.now() }]);
    }, 50);

    const clean = setInterval(() => {
      setConfetti((prev) => prev.filter((c) => c.y < window.innerHeight + 50));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(clean);
    };
  }, []);

  useEffect(() => {
    const fall = setInterval(() => {
      setConfetti((prev) =>
        prev.map((c) => ({ ...c, y: c.y + Math.random() * 5 + 2 }))
      );
    }, 20);
    return () => clearInterval(fall);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full"
          style={{
            left: c.x,
            top: c.y,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
          }}
        />
      ))}

      {/* Card */}
      <div className="card w-96 bg-base-100 shadow-xl border-4 border-white animate-[wiggle_1s_ease-in-out_infinite] text-center">
        <div className="card-body">
          <h2 className="text-5xl font-extrabold text-error animate-bounce animate-pulse">
            ⛔ Not Allowed!
          </h2>
          <p className="mt-4 text-lg text-gray-700 animate-pulse">
            คุณพยายามเข้าที่ห้ามเข้า 🤭<br />
            กลับไปหน้าแรกก่อนนะ!
          </p>
          <div className="card-actions justify-center mt-4">
            <a href="/" className="btn btn-warning btn-lg animate-bounce">
              กลับหน้าแรก
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

export default NotAllowed;
