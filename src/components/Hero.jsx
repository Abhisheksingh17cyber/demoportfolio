import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <div className="indian-emblem"></div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Ankita Singh
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-subtitle">
          <span className="ias-badge">Indian Administrative Service</span>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description">
          Dedicated civil servant committed to public welfare, governance excellence,
          and transformative policy implementation for national development
        </motion.p>

        <motion.div variants={itemVariants} className="hero-stats">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years of Service</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>10M+</h3>
            <p>Lives Impacted</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#about" className="btn btn-primary">
            Learn More
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-social">
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaEnvelope /></a>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
