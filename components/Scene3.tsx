
import React, { useState } from 'react';
import Ducky from './Ducky';

interface Scene3Props {
  onComplete: () => void;
}

const Scene3: React.FC<Scene3Props> = ({ onComplete }) => {
  const [hasPresentedGift, setHasPresentedGift] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [askStatus, setAskStatus] = useState<'initial' | 'asking' | 'ready'>('initial');

  const handleGiftClick = () => {
    setHasPresentedGift(true);
    setAskStatus('asking');
  };

  const moveNoButton = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 80;
    // Ensure it doesn't just jitter but moves somewhere visible
    setNoButtonPos({
      x: Math.max(50, Math.random() * maxX),
      y: Math.max(50, Math.random() * maxY)
    });
  };

  return (
    <div className="relative w-full h-full bg-pink-50 flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Soft Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute opacity-20 text-4xl animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-2xl space-y-12">
        {/* Dialogue Bubble - Redundant label removed */}
        <div className="bg-white/95 p-10 rounded-[3.5rem] border-8 border-yellow-300 shadow-2xl text-center transform transition-transform relative">
          <p className="text-3xl font-black text-blue-800 leading-relaxed italic">
            "{askStatus === 'initial' 
              ? "I didn't want to just fly by without asking..."
              : "Will you be my Valentine and make me the luckiest duck in the pond?"}"
          </p>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-r-8 border-b-8 border-yellow-300 rotate-45"></div>
        </div>

        <div className="flex items-end justify-center space-x-16 relative h-80">
          <Ducky 
            isBlushing 
            hasBouquet={hasPresentedGift} 
            facing="right" 
            scale={2.0} 
          />
          <Ducky 
            isFemale 
            isBlushing={hasPresentedGift} 
            facing="left" 
            scale={2.0} 
          />

          {!hasPresentedGift && (
             <div 
               onClick={handleGiftClick}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 border-4 border-yellow-400 cursor-pointer animate-bounce shadow-xl hover:bg-yellow-100 group"
             >
                <div className="text-7xl group-hover:scale-110 transition-transform">🎁</div>
                <p className="text-center font-black text-yellow-600 mt-2">CLICK ME!</p>
             </div>
          )}
        </div>

        {hasPresentedGift && (
          <div className="flex flex-col items-center space-y-6 pt-10">
            <div className="flex space-x-12">
               <button 
                 onClick={onComplete}
                 className="bg-green-400 hover:bg-green-500 text-white font-black text-6xl px-20 py-10 rounded-3xl border-b-8 border-green-600 shadow-2xl transition-all active:translate-y-2 active:border-b-0"
               >
                 YES!
               </button>

               <button 
                 onMouseEnter={moveNoButton}
                 style={{ 
                   position: noButtonPos.x !== 0 ? 'fixed' : 'relative',
                   left: noButtonPos.x,
                   top: noButtonPos.y,
                   zIndex: 100
                 }}
                 className="bg-red-400 text-white font-bold text-2xl px-10 py-5 rounded-2xl border-b-4 border-red-600 transition-all cursor-default"
               >
                 NO
               </button>
            </div>
            <p className="text-pink-600 font-black text-2xl animate-pulse tracking-widest">
              QUACK TO THE FUTURE! ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scene3;
