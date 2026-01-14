import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaMedal, FaStar, FaCertificate } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Prime Minister\'s Award',
      year: '2022',
      description: 'Excellence in Public Administration for innovative e-governance initiatives',
      category: 'National Honor'
    },
    {
      icon: <FaMedal />,
      title: 'Best District Administrator',
      year: '2021',
      description: 'Recognized for outstanding performance in district administration and development',
      category: 'State Award'
    },
    {
      icon: <FaStar />,
      title: 'Digital India Champion',
      year: '2020',
      description: 'Leading digital transformation in rural governance and citizen services',
      category: 'Central Recognition'
    },
    {
      icon: <FaCertificate />,
      title: 'Sustainable Development Leader',
      year: '2019',
      description: 'Exemplary work in implementing sustainable development goals',
      category: 'UN Recognition'
    },
    {
      icon: <FaTrophy />,
      title: 'Women Excellence Award',
      year: '2018',
      description: 'Outstanding contribution to women empowerment and social welfare',
      category: 'Special Recognition'
    },
    {
      icon: <FaMedal />,
      title: 'Innovation in Governance',
      year: '2017',
      description: 'Pioneering new administrative practices and citizen-centric reforms',
      category: 'State Honor'
    }
  ];

  const stats = [
    { number: '25+', label: 'Awards & Honors' },
    { number: '100+', label: 'Publications' },
    { number: '50+', label: 'Speaking Events' },
    { number: '10M+', label: 'Citizens Served' }
  ];

  return (
    <section className="achievements" id="achievements" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Achievements & Recognition</h2>
          <div className="divider"></div>
          <p>Honors received for dedication to public service</p>
        </motion.div>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-box"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-category">{achievement.category}</div>
              <h3>{achievement.title}</h3>
              <div className="achievement-year">{achievement.year}</div>
              <p>{achievement.description}</p>
              <div className="achievement-shine"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
