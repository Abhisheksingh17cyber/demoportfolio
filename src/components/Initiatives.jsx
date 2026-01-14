import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaHeart, FaTree, FaGraduationCap, FaIndustry, FaShieldAlt } from 'react-icons/fa';
import './Initiatives.css';

const Initiatives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initiatives = [
    {
      icon: <FaRocket />,
      title: 'Digital District Initiative',
      description: 'Comprehensive digitization of all government services for seamless citizen access',
      impact: '2M+ citizens connected',
      status: 'Active',
      color: '#0A2647',
      gradient: 'linear-gradient(135deg, #0A2647 0%, #205295 100%)'
    },
    {
      icon: <FaHeart />,
      title: 'Universal Healthcare Program',
      description: 'Free primary healthcare access for all residents through mobile clinics and telemedicine',
      impact: '500K+ beneficiaries',
      status: 'Expanding',
      color: '#E91E63',
      gradient: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)'
    },
    {
      icon: <FaTree />,
      title: 'Green District Mission',
      description: 'Environmental conservation through tree plantation, waste management, and renewable energy',
      impact: '1M+ trees planted',
      status: 'Ongoing',
      color: '#4CAF50',
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education Excellence Program',
      description: 'Quality education enhancement through digital learning and teacher training',
      impact: '200+ schools upgraded',
      status: 'Active',
      color: '#FF9800',
      gradient: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)'
    },
    {
      icon: <FaIndustry />,
      title: 'MSME Development Hub',
      description: 'Supporting micro, small, and medium enterprises through funding and mentorship',
      impact: '1000+ businesses supported',
      status: 'Growing',
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Women Safety Initiative',
      description: 'Comprehensive safety measures including helplines, rapid response, and awareness programs',
      impact: '24/7 protection coverage',
      status: 'Active',
      color: '#F44336',
      gradient: 'linear-gradient(135deg, #F44336 0%, #E57373 100%)'
    }
  ];

  return (
    <section className="initiatives" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Flagship Initiatives</h2>
          <div className="divider"></div>
          <p>Transformative programs driving change and development</p>
        </motion.div>

        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="initiative-card"
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ '--card-color': initiative.color }}
            >
              <div className="card-background" style={{ background: initiative.gradient }}></div>
              
              <div className="initiative-status">{initiative.status}</div>

              <div className="initiative-icon" style={{ color: initiative.color }}>
                {initiative.icon}
              </div>

              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>

              <div className="initiative-impact">
                <div className="impact-badge">
                  <span className="impact-label">Impact</span>
                  <span className="impact-value">{initiative.impact}</span>
                </div>
              </div>

              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
