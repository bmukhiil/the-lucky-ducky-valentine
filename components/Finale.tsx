
import React, { useState } from 'react';
import Ducky from './Ducky';

interface FinaleProps {
  onRestart: () => void;
}

const Finale: React.FC<FinaleProps> = ({ onRestart }) => {
  const [isConfettiActive] = useState(true);

  const poem = `They waddle close, a perfect pair,
With happy quacks throughout the air.
"I'm such a lucky duck," he sighed,
To have his Valentine by his side.`;

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-pink-200 to-red-100 flex flex-col items-center justify-center p-8">
      {/* Confetti Particle Effect */}
      {isConfettiActive && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-[bounce_3s_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${-10 - Math.random() * 20}%`,
                fontSize: `${Math.random() * 24 + 12}px`,
                animationDelay: `${Math.random() * 5}s`,
                color: ['#ff4d4d', '#ff9999', '#fff', '#ffd700'][Math.floor(Math.random() * 4)]
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <div className="z-10 flex flex-col items-center space-y-12 max-w-xl text-center">
        <h1 className="text-7xl font-black text-red-600 drop-shadow-lg animate-bounce">
          HOORAY!
        </h1>

        <div className="flex items-center space-x-6">
          <Ducky isBlushing facing="right" scale={1.4} />
          <div className="text-5xl animate-pulse">❤️</div>
          <Ducky isFemale isBlushing facing="left" scale={1.4} />
        </div>

        <div className="bg-white/90 p-12 rounded-[4rem] border-8 border-white shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
          <pre className="text-3xl font-bold text-red-800 whitespace-pre-wrap font-['Fredoka'] leading-relaxed italic">
            {poem}
          </pre>
        </div>

        <p className="text-2xl font-black text-red-400 animate-pulse tracking-tight">
          THE HAPPIEST DUCKS IN THE POND! 🌊✨
        </p>

        <button 
          onClick={onRestart}
          className="bg-white hover:bg-red-50 text-red-600 font-black px-10 py-5 rounded-full border-4 border-red-600 shadow-xl transition-all hover:scale-110 active:scale-95"
        >
          Waddle Again? 🦆
        </button>
      </div>
    </div>
  );
};

export default Finale;
