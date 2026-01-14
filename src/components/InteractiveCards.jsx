import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTrophy, FaLightbulb, FaRocket, FaGem, FaCrown } from 'react-icons/fa';
import './InteractiveCards.css';

const InteractiveCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const cards = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: 'Integrity First',
      description: 'Unwavering commitment to ethical governance',
      color: '#1a1a2e',
      accent: '#c79100'
    },
    {
      id: 2,
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Striving for the highest standards in service',
      color: '#16213e',
      accent: '#b8860b'
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Pioneering solutions for modern challenges',
      color: '#0f3460',
      accent: '#daa520'
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: 'Progress',
      description: 'Driving transformative development initiatives',
      color: '#0a2647',
      accent: '#ffd700'
    },
    {
      id: 5,
      icon: <FaGem />,
      title: 'Quality',
      description: 'Delivering superior outcomes consistently',
      color: '#001f3f',
      accent: '#cd9600'
    },
    {
      id: 6,
      icon: <FaCrown />,
      title: 'Leadership',
      description: 'Inspiring teams toward collective success',
      color: '#000814',
      accent: '#e6ac00'
    }
  ];

  const Card3D = ({ card, index }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateXValue = ((y - centerY) / centerY) * -15;
      const rotateYValue = ((x - centerX) / centerX) * 15;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        ref={cardRef}
        className="interactive-card-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHoveredCard(card.id)}
      >
        <motion.div
          className="interactive-card"
          style={{ 
            background: `linear-gradient(135deg, ${card.color} 0%, ${card.accent}22 100%)`,
          }}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <div className="card-shine" />
          <motion.div 
            className="card-icon"
            animate={{
              scale: hoveredCard === card.id ? 1.2 : 1,
              rotate: hoveredCard === card.id ? 360 : 0,
            }}
            transition={{ duration: 0.6 }}
            style={{ color: card.accent }}
          >
            {card.icon}
          </motion.div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <motion.div 
            className="card-glow"
            animate={{
              opacity: hoveredCard === card.id ? 0.8 : 0,
            }}
            style={{ background: `radial-gradient(circle, ${card.accent}40 0%, transparent 70%)` }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="interactive-cards-section" id="values">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Core Principles</h2>
          <p>Foundation of Excellence in Public Service</p>
        </motion.div>

        <div className="interactive-cards-grid">
          {cards.map((card, index) => (
            <Card3D key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards;
