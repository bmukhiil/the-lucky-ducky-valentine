
import React from 'react';

interface DuckyProps {
  isBlushing?: boolean;
  isWalking?: boolean;
  hasBackpack?: boolean;
  hasBouquet?: boolean;
  facing?: 'left' | 'right';
  className?: string;
  isFemale?: boolean;
  scale?: number;
}

const Ducky: React.FC<DuckyProps> = ({
  isBlushing = false,
  isWalking = false,
  hasBackpack = false,
  hasBouquet = false,
  facing = 'right',
  className = '',
  isFemale = false,
  scale = 1
}) => {
  const walkAnimation = isWalking ? "animate-bounce" : "";
  const flipX = facing === 'left' ? "scale-x-[-1]" : "";

  return (
    <div className={`relative transition-all duration-300 ${className} ${flipX} ${walkAnimation}`} style={{ transform: `scale(${scale})` }}>
      <svg
        viewBox="0 0 100 100"
        className="w-32 h-32 drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="50" cy="85" rx="30" ry="10" fill="black" fillOpacity="0.1" />

        {/* Body - Main Ducky Shape */}
        <circle cx="50" cy="55" r="35" fill={isFemale ? "#FFF9C4" : "#FFEB3B"} stroke="#333" strokeWidth="2" />
        
        {/* Head */}
        <circle cx="65" cy="35" r="22" fill={isFemale ? "#FFF9C4" : "#FFEB3B"} stroke="#333" strokeWidth="2" />

        {/* Tail */}
        <path d="M20 45 Q10 40 15 60" stroke="#333" strokeWidth="2" fill={isFemale ? "#FFF9C4" : "#FFEB3B"} />

        {/* Feet */}
        <path d="M40 85 Q45 95 50 85" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 85 Q65 95 70 85" stroke="#333" strokeWidth="3" strokeLinecap="round" />

        {/* Beak */}
        <path d="M82 35 Q90 35 82 42 Z" fill="#FF9800" stroke="#333" strokeWidth="1.5" />

        {/* Eyes */}
        <circle cx="72" cy="32" r="2.5" fill="#333" />
        
        {/* Female Ducky Details (Bow) */}
        {isFemale && (
          <g transform="translate(60, 15) rotate(-20)">
            <circle cx="0" cy="0" r="4" fill="#F06292" stroke="#333" strokeWidth="1" />
            <circle cx="6" cy="0" r="4" fill="#F06292" stroke="#333" strokeWidth="1" />
            <circle cx="3" cy="0" r="2" fill="#fff" stroke="#333" strokeWidth="1" />
          </g>
        )}

        {/* Blush */}
        {isBlushing && (
          <>
            <circle cx="68" cy="40" r="4" fill="#FF80AB" fillOpacity="0.6" />
            <circle cx="80" cy="40" r="2" fill="#FF80AB" fillOpacity="0.4" />
          </>
        )}

        {/* Backpack */}
        {hasBackpack && (
          <rect x="30" y="45" width="25" height="20" rx="4" fill="#2196F3" stroke="#333" strokeWidth="2" />
        )}

        {/* Bouquet */}
        {hasBouquet && (
          <g transform="translate(75, 55)">
            {/* Lilies */}
            <circle cx="0" cy="0" r="6" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="8" cy="-5" r="6" fill="white" stroke="#333" strokeWidth="1" />
            <circle cx="5" cy="5" r="6" fill="white" stroke="#333" strokeWidth="1" />
            {/* Stems */}
            <path d="M0 0 L-10 20" stroke="#4CAF50" strokeWidth="2" />
            <path d="M8 -5 L-10 20" stroke="#4CAF50" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
};

export default Ducky;
