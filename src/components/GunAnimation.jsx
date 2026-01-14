import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GunAnimation.css';

const GunAnimation = () => {
  const [isShooting, setIsShooting] = useState(false);
  const [bulletsFired, setBulletsFired] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [autoMode, setAutoMode] = useState(true);

  const handleShoot = () => {
    setIsShooting(true);
    setBulletsFired(prev => prev + 1);
    
    const newAccuracy = Math.floor(Math.random() * 16) + 85;
    setAccuracy(newAccuracy);

    setTimeout(() => {
      setIsShooting(false);
    }, 500);
  };

  useEffect(() => {
    if (autoMode) {
      const interval = setInterval(() => {
        handleShoot();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoMode, bulletsFired]);

  const resetStats = () => {
    setBulletsFired(0);
    setAccuracy(0);
    setIsShooting(false);
  };

  return (
    <div className="gun-animation-container">
      <motion.div 
        className="stats-panel"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="stat-item">
          <span className="stat-label">Rounds Fired</span>
          <motion.span 
            className="stat-value"
            key={bulletsFired}
            initial={{ scale: 1.5, color: '#D4AF37' }}
            animate={{ scale: 1, color: '#fff' }}
            transition={{ duration: 0.3 }}
          >
            {bulletsFired}
          </motion.span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accuracy</span>
          <motion.span 
            className="stat-value"
            key={accuracy}
            initial={{ scale: 1.5, color: '#D4AF37' }}
            animate={{ scale: 1, color: '#fff' }}
            transition={{ duration: 0.3 }}
          >
            {accuracy}%
          </motion.span>
        </div>
      </motion.div>

      <motion.div
        className={`gun-wrapper ${isShooting ? 'shooting' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: isShooting ? -5 : 0
        }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="gun-svg"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="gun-body">
            <rect x="50" y="35" width="80" height="12" fill="#2c3e50" rx="2" />
            <rect x="125" y="37" width="15" height="8" fill="#1a252f" rx="1" />
            <rect x="45" y="30" width="60" height="20" fill="#34495e" rx="2" className="gun-slide" />
            <rect x="50" y="32" width="50" height="16" fill="#2c3e50" rx="1" />
            <path
              d="M 45 47 L 45 70 L 38 75 L 35 73 L 35 65 L 40 50 Z"
              fill="#34495e"
              stroke="#2c3e50"
              strokeWidth="1"
            />
            <rect x="37" y="55" width="6" height="2" fill="#2c3e50" />
            <rect x="37" y="60" width="6" height="2" fill="#2c3e50" />
            <rect x="37" y="65" width="6" height="2" fill="#2c3e50" />
            <path
              d="M 45 47 Q 42 50 42 55 Q 42 60 45 63"
              fill="none"
              stroke="#2c3e50"
              strokeWidth="2"
            />
            <motion.rect 
              x="43" 
              y="52" 
              width="3" 
              height="8" 
              fill="#e74c3c" 
              rx="1" 
              animate={{
                rotate: isShooting ? 15 : 0
              }}
              transition={{ duration: 0.1 }}
              style={{ transformOrigin: 'top center' }}
            />
            <rect x="120" y="28" width="4" height="7" fill="#95a5a6" />
            <rect x="55" y="28" width="4" height="7" fill="#95a5a6" />
            <circle cx="60" cy="40" r="2" fill="#1a252f" />
            <line x1="70" y1="35" x2="70" y2="47" stroke="#1a252f" strokeWidth="0.5" />
            <line x1="80" y1="35" x2="80" y2="47" stroke="#1a252f" strokeWidth="0.5" />
            <line x1="90" y1="35" x2="90" y2="47" stroke="#1a252f" strokeWidth="0.5" />
          </g>
          
          <AnimatePresence>
            {isShooting && (
              <motion.g 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.2 }}
              >
                <polygon points="140,41 155,36 160,41 155,46" fill="#ff6b35" />
                <polygon points="140,41 158,38 165,41 158,44" fill="#ffd700" />
                <circle cx="145" cy="41" r="8" fill="#ff6b35" />
              </motion.g>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {isShooting && (
              <motion.circle 
                cx="150" 
                cy="41" 
                r="3" 
                fill="#d4af37"
                initial={{ cx: 150, opacity: 1 }}
                animate={{ cx: 180, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            )}
          </AnimatePresence>
          
          <g className="target">
            <circle cx="180" cy="41" r="12" fill="#e74c3c" opacity="0.8" />
            <circle cx="180" cy="41" r="8" fill="#fff" opacity="0.8" />
            <circle cx="180" cy="41" r="4" fill="#e74c3c" opacity="0.8" />
            <circle cx="180" cy="41" r="2" fill="#fff" opacity="0.8" />
          </g>
          
          <AnimatePresence>
            {isShooting && (
              <motion.g 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
              >
                <motion.circle 
                  cx="180" 
                  cy="41" 
                  r="5" 
                  fill="none" 
                  stroke="#ff6b35" 
                  strokeWidth="2"
                  animate={{ r: [5, 15], opacity: [1, 0] }}
                  transition={{ duration: 0.4 }}
                />
                <motion.line 
                  x1="175" y1="36" x2="170" y2="31" 
                  stroke="#ff6b35" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [1, 0] }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line 
                  x1="185" y1="36" x2="190" y2="31" 
                  stroke="#ff6b35" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [1, 0] }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line 
                  x1="185" y1="46" x2="190" y2="51" 
                  stroke="#ff6b35" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [1, 0] }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line 
                  x1="175" y1="46" x2="170" y2="51" 
                  stroke="#ff6b35" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [1, 0] }}
                  transition={{ duration: 0.3 }}
                />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
        
        <AnimatePresence>
          {isShooting && (
            <motion.div
              className="shooting-indicator active"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              💥
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.div 
        className="controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="control-btn fire-btn"
          onClick={handleShoot}
          disabled={autoMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔫 Fire Round
        </motion.button>
        
        <motion.button
          className={`control-btn mode-btn ${autoMode ? 'active' : ''}`}
          onClick={() => setAutoMode(!autoMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {autoMode ? '⏸️ Pause Auto' : '▶️ Auto Fire'}
        </motion.button>
        
        <motion.button
          className="control-btn reset-btn"
          onClick={resetStats}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔄 Reset Stats
        </motion.button>
      </motion.div>
      
      <div className="training-labels">
        <span className="label">Firearms Training</span>
        <span className="sub-label">Accuracy • Safety • Discipline</span>
      </div>
    </div>
  );
};

export default GunAnimation;
