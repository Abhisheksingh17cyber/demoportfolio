import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBalanceScale, FaChartLine, FaUsers, FaLightbulb, FaHandshake, FaGlobe } from 'react-icons/fa';
import './Expertise.css';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Public Administration', level: 95, icon: <FaBalanceScale />, color: '#0A2647' },
    { name: 'Policy Making', level: 92, icon: <FaChartLine />, color: '#144272' },
    { name: 'Community Engagement', level: 98, icon: <FaUsers />, color: '#205295' },
    { name: 'Strategic Planning', level: 90, icon: <FaLightbulb />, color: '#2E73B8' },
    { name: 'Stakeholder Management', level: 94, icon: <FaHandshake />, color: '#3A85C7' },
    { name: 'Digital Governance', level: 88, icon: <FaGlobe />, color: '#4A9BE0' }
  ];

  return (
    <section className="expertise" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Core Expertise</h2>
          <div className="divider"></div>
          <p>Specialized skills in public administration and governance</p>
        </motion.div>

        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="expertise-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
              
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, #D4AF37)` }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                >
                  <div className="progress-shine"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
