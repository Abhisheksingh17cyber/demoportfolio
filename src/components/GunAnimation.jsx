import { motion } from 'framer-motion';
import './GunAnimation.css';

const GunAnimation = () => {
  return (
    <div className="gun-animation-container">
      <motion.div
        className="gun-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Gun SVG */}
        <svg
          className="gun-svg"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gun Body */}
          <g className="gun-body">
            {/* Barrel */}
            <rect x="50" y="35" width="80" height="12" fill="#2c3e50" rx="2" />
            <rect x="125" y="37" width="15" height="8" fill="#1a252f" rx="1" />
            
            {/* Slide */}
            <rect x="45" y="30" width="60" height="20" fill="#34495e" rx="2" className="gun-slide" />
            <rect x="50" y="32" width="50" height="16" fill="#2c3e50" rx="1" />
            
            {/* Grip */}
            <path
              d="M 45 47 L 45 70 L 38 75 L 35 73 L 35 65 L 40 50 Z"
              fill="#34495e"
              stroke="#2c3e50"
              strokeWidth="1"
            />
            <rect x="37" y="55" width="6" height="2" fill="#2c3e50" />
            <rect x="37" y="60" width="6" height="2" fill="#2c3e50" />
            <rect x="37" y="65" width="6" height="2" fill="#2c3e50" />
            
            {/* Trigger Guard */}
            <path
              d="M 45 47 Q 42 50 42 55 Q 42 60 45 63"
              fill="none"
              stroke="#2c3e50"
              strokeWidth="2"
            />
            
            {/* Trigger */}
            <rect x="43" y="52" width="3" height="8" fill="#e74c3c" rx="1" className="gun-trigger" />
            
            {/* Sight */}
            <rect x="120" y="28" width="4" height="7" fill="#95a5a6" />
            <rect x="55" y="28" width="4" height="7" fill="#95a5a6" />
            
            {/* Details */}
            <circle cx="60" cy="40" r="2" fill="#1a252f" />
            <line x1="70" y1="35" x2="70" y2="47" stroke="#1a252f" strokeWidth="0.5" />
            <line x1="80" y1="35" x2="80" y2="47" stroke="#1a252f" strokeWidth="0.5" />
            <line x1="90" y1="35" x2="90" y2="47" stroke="#1a252f" strokeWidth="0.5" />
          </g>
          
          {/* Muzzle Flash */}
          <g className="muzzle-flash">
            <polygon
              points="140,41 155,36 160,41 155,46"
              fill="#ff6b35"
              opacity="0"
            />
            <polygon
              points="140,41 158,38 165,41 158,44"
              fill="#ffd700"
              opacity="0"
            />
            <circle cx="145" cy="41" r="8" fill="#ff6b35" opacity="0" className="flash-circle" />
          </g>
          
          {/* Bullet */}
          <circle cx="150" cy="41" r="3" fill="#d4af37" className="bullet" opacity="0" />
          
          {/* Target */}
          <g className="target">
            <circle cx="180" cy="41" r="12" fill="#e74c3c" opacity="0.8" />
            <circle cx="180" cy="41" r="8" fill="#fff" opacity="0.8" />
            <circle cx="180" cy="41" r="4" fill="#e74c3c" opacity="0.8" />
            <circle cx="180" cy="41" r="2" fill="#fff" opacity="0.8" />
          </g>
          
          {/* Impact Effect */}
          <g className="impact-effect">
            <circle cx="180" cy="41" r="5" fill="none" stroke="#ff6b35" strokeWidth="2" opacity="0" />
            <line x1="175" y1="36" x2="170" y2="31" stroke="#ff6b35" strokeWidth="2" opacity="0" className="impact-line-1" />
            <line x1="185" y1="36" x2="190" y2="31" stroke="#ff6b35" strokeWidth="2" opacity="0" className="impact-line-2" />
            <line x1="185" y1="46" x2="190" y2="51" stroke="#ff6b35" strokeWidth="2" opacity="0" className="impact-line-3" />
            <line x1="175" y1="46" x2="170" y2="51" stroke="#ff6b35" strokeWidth="2" opacity="0" className="impact-line-4" />
          </g>
        </svg>
        
        {/* Shooting Animation Indicator */}
        <motion.div
          className="shooting-indicator"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          🎯
        </motion.div>
      </motion.div>
      
      <div className="training-labels">
        <span className="label">Firearms Training</span>
        <span className="sub-label">Accuracy • Safety • Discipline</span>
      </div>
    </div>
  );
};

export default GunAnimation;
