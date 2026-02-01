
import React, { useState } from 'react';
import Ducky from './Ducky';

interface Scene1Props {
  onComplete: () => void;
}

const Scene1: React.FC<Scene1Props> = ({ onComplete }) => {
  const [isWalking, setIsWalking] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startJourney = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsWalking(true);
    
    // Smoothly scroll the background to the end
    setOffset(-1400);

    // After the animation duration, move to the next scene
    setTimeout(() => {
      setIsWalking(false);
      onComplete();
    }, 4500);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-sky-200 flex flex-col items-center justify-end">
      {/* 1. Static Sky Elements */}
      <div className="absolute top-12 left-12 w-20 h-20 bg-yellow-300 rounded-full shadow-[0_0_50px_rgba(253,224,71,0.5)] z-0"></div>
      
      {/* 2. Scrolling Background Layer */}
      <div 
        className="absolute inset-0 transition-transform duration-[4500ms] ease-in-out flex"
        style={{ transform: `translateX(${offset}px)`, width: '4000px' }}
      >
        <div className="w-full h-full relative">
          {/* Distant Hills */}
          <div className="absolute bottom-32 left-0 w-full h-40 flex items-end">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="w-[600px] h-32 bg-green-300/40 rounded-t-[200px] -ml-20"></div>
             ))}
          </div>

          {/* Park Details */}
          <div className="absolute bottom-0 w-full h-72 bg-green-200">
             {/* Bushes and Trees */}
             <div className="absolute bottom-20 left-100 w-32 h-32 bg-green-500 rounded-full border-4 border-green-700"></div>
             <div className="absolute bottom-24 left-[500px] w-40 h-40 bg-green-600 rounded-full border-4 border-green-800"></div>
             <div className="absolute bottom-20 left-[1200px] w-28 h-28 bg-green-500 rounded-full border-4 border-green-700"></div>
             
             {/* Picket Fence */}
             {[...Array(20)].map((_, i) => (
               <div key={i} className="absolute bottom-24 w-6 h-24 bg-white border-2 border-gray-300 shadow-sm" style={{ left: `${i * 120 + 50}px` }}>
                 <div className="absolute -top-3 left-0 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[12px] border-b-white"></div>
               </div>
             ))}

             {/* Flower patches */}
             {[...Array(8)].map((_, i) => (
               <div key={i} className="absolute bottom-12 flex space-x-1" style={{ left: `${i * 450 + 200}px` }}>
                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                 <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
             ))}

             {/* Distant Schoolhouse */}
             <div className="absolute bottom-32 left-[2200px] w-72 h-60 bg-red-400 border-b-0 border-4 border-red-900 rounded-t-2xl shadow-lg">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[64px] border-b-red-900"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-32 bg-amber-900 rounded-t-lg border-4 border-amber-950"></div>
                <div className="absolute top-12 left-8 w-14 h-14 bg-sky-100 border-4 border-red-900 rounded-lg"></div>
                <div className="absolute top-12 right-8 w-14 h-14 bg-sky-100 border-4 border-red-900 rounded-lg"></div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. Ducky & Interactive UI */}
      <div className="z-20 flex flex-col items-center mb-12 space-y-6">
        {!hasStarted ? (
          <div className="bg-white/95 px-8 py-6 rounded-[2rem] border-4 border-sky-400 shadow-2xl relative animate-bounce mb-2">
            <p className="text-3xl font-bold text-sky-800">"Another day, another waddle..."</p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/95 border-r-4 border-b-4 border-sky-400 rotate-45"></div>
          </div>
        ) : (
          <div className="bg-white/90 px-6 py-4 rounded-3xl border-4 border-pink-400 shadow-xl relative animate-pulse mb-2">
             <p className="text-xl font-bold text-pink-700 italic">I think I see her!</p>
          </div>
        )}

        {/* Ducky positioned firmly on the path */}
        <div className="relative translate-y-[24px]">
          <Ducky hasBackpack isWalking={isWalking} scale={1.3} />
        </div>

        {!hasStarted && (
          <button 
            onClick={startJourney}
            className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-black text-4xl px-16 py-8 rounded-full border-b-[12px] border-yellow-600 active:border-b-0 active:translate-y-2 transition-all shadow-2xl group"
          >
            LET'S WADDLE!
          </button>
        )}
      </div>
      
      {/* 4. The Path (Grounding Layer) */}
      <div className="absolute bottom-0 w-full h-32 bg-orange-100 border-t-8 border-orange-200 z-10">
         <div className="absolute inset-0 flex flex-wrap opacity-10 pointer-events-none p-4">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-orange-800 rounded-full m-8"></div>
            ))}
         </div>
         {/* Tufted grass transition */}
         <div className="absolute -top-4 w-full flex justify-around opacity-40">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-12 h-6 bg-green-500 rounded-t-full"></div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Scene1;
