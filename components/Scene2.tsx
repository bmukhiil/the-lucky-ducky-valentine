
import React, { useState } from 'react';
import Ducky from './Ducky';

interface Scene2Props {
  onComplete: () => void;
}

const Scene2: React.FC<Scene2Props> = ({ onComplete }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [monologueIndex, setMonologueIndex] = useState(0);

  const monologues = [
    "She's so graceful... and her feathers are perfect.",
    "I have to say something, but my wings are sweaty!",
    "Okay, deep breath... here I go!"
  ];

  const handleHeartPop = () => {
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 40 - 20, // offset
      y: Math.random() * -20
    };
    setHearts(prev => [...prev, newHeart]);
    
    // Auto remove heart after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1000);

    if (monologueIndex < monologues.length - 1) {
      setMonologueIndex(prev => prev + 1);
    } else {
      setTimeout(onComplete, 2000);
    }
  };

  return (
    <div className="relative w-full h-full bg-blue-50 flex items-center justify-center p-8">
      {/* Pond Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky-300">
           {/* Water ripples */}
           <div className="absolute top-10 left-1/4 w-40 h-4 bg-sky-200/50 rounded-full animate-pulse"></div>
           <div className="absolute top-20 left-1/2 w-60 h-6 bg-sky-200/50 rounded-full animate-pulse delay-75"></div>
           
           {/* Daisy Patch */}
           <div className="absolute bottom-20 right-40 flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-white rounded-full border-2 border-yellow-200 flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              ))}
           </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-sky-100"></div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-4xl space-y-12">
        {/* Dialogue Bubble */}
        <div className="bg-white/95 p-8 rounded-3xl border-4 border-pink-300 shadow-2xl relative">
          <p className="text-3xl font-bold text-pink-600 italic">
            "{monologues[monologueIndex]}"
          </p>
          <div className="absolute -bottom-4 left-1/4 -translate-x-1/2 w-8 h-8 bg-white/95 border-r-4 border-b-4 border-pink-300 rotate-45"></div>
        </div>

        <div className="flex justify-between items-end w-full px-20 relative h-64">
           {/* Interactive Ducky */}
           <div className="relative cursor-pointer" onClick={handleHeartPop}>
              <Ducky isBlushing facing="right" scale={1.2} />
              
              {/* Hearts Pop Layer */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none">
                {hearts.map(heart => (
                  <div 
                    key={heart.id} 
                    className="absolute text-5xl animate-[ping_1s_ease-out_forwards]"
                    style={{ transform: `translate(${heart.x}px, ${heart.y}px)` }}
                  >
                    ❤️
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center font-bold text-gray-400 bg-white/40 rounded-full py-1 text-sm animate-pulse px-3">Tap me!</p>
           </div>

           {/* Female Ducky */}
           <div className="relative">
              <Ducky isFemale facing="left" scale={1.2} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Scene2;
