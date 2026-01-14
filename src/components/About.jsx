import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: <FaGraduationCap />,
      title: 'Excellence',
      description: 'Striving for the highest standards in public service'
    },
    {
      icon: <FaAward />,
      title: 'Integrity',
      description: 'Upholding transparency and ethical governance'
    },
    {
      icon: <FaUsers />,
      title: 'People First',
      description: 'Citizen-centric approach to policy making'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Building partnerships for sustainable development'
    }
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <div className="divider"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <div className="profile-image"></div>
              <div className="image-overlay">
                <div className="overlay-text">
                  <h3>Ankita Singh, IAS</h3>
                  <p>Serving the Nation</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3>A Journey of Service and Leadership</h3>
            <p>
              As an Indian Administrative Service officer with over 15 years of experience,
              I have dedicated my career to transforming governance and improving public welfare.
              My journey has been marked by innovative policy implementations, sustainable development
              initiatives, and a steadfast commitment to serving the people of India.
            </p>
            <p>
              From rural development programs to urban infrastructure projects, my work has
              consistently focused on creating lasting impact and fostering inclusive growth.
              I believe in the power of collaborative governance and evidence-based policy making
              to address the complex challenges facing our nation.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2008</span>
                <span className="highlight-text">Joined IAS</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">UPSC Rank</span>
                <span className="highlight-text">Top 50</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">MBA</span>
                <span className="highlight-text">IIM Ahmedabad</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="values-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
