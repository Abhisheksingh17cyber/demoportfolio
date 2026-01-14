import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaChartLine, FaUsers, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import './Statistics.css';

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('all');

  const stats = [
    {
      category: 'development',
      icon: <FaChartLine />,
      number: '500+',
      label: 'Projects Completed',
      subtext: 'Infrastructure & Development',
      color: '#2196F3'
    },
    {
      category: 'welfare',
      icon: <FaUsers />,
      number: '10M+',
      label: 'Citizens Benefited',
      subtext: 'Through Welfare Schemes',
      color: '#4CAF50'
    },
    {
      category: 'budget',
      icon: <FaRupeeSign />,
      number: '₹5000Cr+',
      label: 'Budget Allocated',
      subtext: 'For Development Programs',
      color: '#FF9800'
    },
    {
      category: 'efficiency',
      icon: <FaCheckCircle />,
      number: '95%',
      label: 'Target Achievement',
      subtext: 'In Policy Implementation',
      color: '#9C27B0'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Statistics' },
    { id: 'development', name: 'Development' },
    { id: 'welfare', name: 'Welfare' },
    { id: 'budget', name: 'Budget' },
    { id: 'efficiency', name: 'Efficiency' }
  ];

  const filteredStats = activeCategory === 'all' 
    ? stats 
    : stats.filter(stat => stat.category === activeCategory);

  return (
    <section className="statistics" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Impact Statistics</h2>
          <div className="divider"></div>
          <p>Measurable impact through dedicated public service</p>
        </motion.div>

        <div className="category-filter">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="stats-grid">
          {filteredStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ '--accent-color': stat.color }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <h3>{stat.label}</h3>
              <p>{stat.subtext}</p>
              <div className="stat-glow" style={{ background: stat.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
