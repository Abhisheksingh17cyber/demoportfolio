import { motion } from 'framer-motion';
import { FaGraduationCap, FaHorse, FaBullseye, FaRunning, FaMountain, FaShieldAlt, FaBook, FaUsers, FaLaptop, FaHandshake } from 'react-icons/fa';
import GunAnimation from './GunAnimation';
import './Training.css';

const Training = () => {
  const trainingPhases = [
    {
      phase: "Foundation Course",
      duration: "15 Weeks",
      location: "LBSNAA, Mussoorie",
      icon: <FaGraduationCap />,
      modules: [
        "Indian Constitution & Polity",
        "Public Administration",
        "Ethics & Values",
        "Communication Skills",
        "Computer Applications"
      ],
      color: "#0A2647"
    },
    {
      phase: "Professional Course - Phase I",
      duration: "24 Weeks",
      location: "LBSNAA, Mussoorie",
      icon: <FaBook />,
      modules: [
        "District Administration",
        "Financial Management",
        "Project Management",
        "Legal Framework",
        "Development Administration"
      ],
      color: "#144272"
    },
    {
      phase: "Bharat Darshan & Study Tour",
      duration: "4 Weeks",
      location: "Pan India",
      icon: <FaMountain />,
      modules: [
        "Rural & Urban Exposure",
        "Industrial Visits",
        "Cultural Understanding",
        "Ground Reality Assessment",
        "Field Projects"
      ],
      color: "#205295"
    },
    {
      phase: "Professional Course - Phase II",
      duration: "18 Weeks",
      location: "LBSNAA, Mussoorie",
      icon: <FaUsers />,
      modules: [
        "Advanced Public Policy",
        "Crisis Management",
        "Leadership Skills",
        "International Relations",
        "Digital Governance"
      ],
      color: "#D4AF37"
    }
  ];

  const physicalTraining = [
    {
      title: "Firearms Training",
      icon: <FaBullseye />,
      description: "Weapon handling, shooting accuracy, and firearm safety protocols",
      activities: ["Pistol Training", "Rifle Practice", "Target Shooting", "Safety Procedures"],
      color: "#e74c3c"
    },
    {
      title: "Horse Riding",
      icon: <FaHorse />,
      description: "Equestrian skills for ceremonial duties and mounted patrols",
      activities: ["Basic Riding", "Trotting & Galloping", "Jumping", "Horse Care"],
      color: "#8B4513"
    },
    {
      title: "Outdoor Activities",
      icon: <FaMountain />,
      description: "Trekking, mountaineering, and survival skills in challenging terrains",
      activities: ["Trekking", "Rock Climbing", "Camping", "Navigation"],
      color: "#27ae60"
    },
    {
      title: "Physical Fitness",
      icon: <FaRunning />,
      description: "Daily fitness regime including PT, yoga, and sports activities",
      activities: ["Morning PT", "Yoga Sessions", "Sports", "Obstacle Course"],
      color: "#3498db"
    }
  ];

  const skillDevelopment = [
    {
      category: "Leadership",
      icon: <FaUsers />,
      skills: ["Team Management", "Decision Making", "Crisis Handling", "Strategic Planning"]
    },
    {
      category: "Communication",
      icon: <FaHandshake />,
      skills: ["Public Speaking", "Negotiation", "Media Handling", "Interpersonal Skills"]
    },
    {
      category: "Technology",
      icon: <FaLaptop />,
      skills: ["E-Governance", "Data Analytics", "Digital Tools", "IT Applications"]
    },
    {
      category: "Security",
      icon: <FaShieldAlt />,
      skills: ["Law & Order", "Disaster Management", "Security Protocols", "Intelligence"]
    }
  ];

  return (
    <section className="training" id="training">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>IAS Training Programme</h2>
          <p>Rigorous Training at LBSNAA, Mussoorie</p>
          <div className="training-badge">
            <span className="badge-icon">🏛️</span>
            <span className="badge-text">Lal Bahadur Shastri National Academy of Administration</span>
          </div>
        </motion.div>

        {/* Training Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="training-overview"
        >
          <div className="overview-card">
            <h3>📅 Total Duration</h3>
            <p className="highlight">72 Weeks (18 Months)</p>
          </div>
          <div className="overview-card">
            <h3>🏔️ Location</h3>
            <p className="highlight">Mussoorie, Uttarakhand</p>
          </div>
          <div className="overview-card">
            <h3>🎯 Training Type</h3>
            <p className="highlight">Residential Programme</p>
          </div>
          <div className="overview-card">
            <h3>🌐 Exposure</h3>
            <p className="highlight">National & International</p>
          </div>
        </motion.div>

        {/* Animated Gun Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GunAnimation />
        </motion.div>

        {/* Training Phases */}
        <div className="training-phases">
          {trainingPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="phase-card"
            >
              <div className="phase-header" style={{ background: phase.color }}>
                <div className="phase-icon">{phase.icon}</div>
                <div className="phase-info">
                  <h3>{phase.phase}</h3>
                  <p className="phase-duration">{phase.duration}</p>
                  <p className="phase-location">📍 {phase.location}</p>
                </div>
              </div>
              <div className="phase-content">
                <h4>Key Modules</h4>
                <ul className="modules-list">
                  {phase.modules.map((module, idx) => (
                    <li key={idx}>{module}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="physical-training-section"
        >
          <h3 className="section-title">🏋️ Physical & Outdoor Training</h3>
          <p className="section-subtitle">Building Physical Endurance and Mental Toughness</p>
          
          <div className="physical-training-grid">
            {physicalTraining.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="physical-card"
                whileHover={{ y: -10 }}
              >
                <div className="physical-icon" style={{ color: training.color }}>
                  {training.icon}
                </div>
                <h4>{training.title}</h4>
                <p className="physical-desc">{training.description}</p>
                <div className="activities-list">
                  {training.activities.map((activity, idx) => (
                    <span key={idx} className="activity-tag" style={{ borderColor: training.color }}>
                      {activity}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skill-development"
        >
          <h3 className="section-title">💼 Skill Development Areas</h3>
          <div className="skills-grid">
            {skillDevelopment.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-category"
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">{category.icon}</div>
                <h4>{category.category}</h4>
                <ul className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="training-highlights"
        >
          <h3>🌟 Training Highlights</h3>
          <div className="highlights-container">
            <div className="highlight-item">
              <span className="highlight-number">01</span>
              <h4>World-Class Faculty</h4>
              <p>Expert trainers from government, academia, and industry</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">02</span>
              <h4>Practical Exposure</h4>
              <p>Field visits, simulation exercises, and case studies</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <h4>International Training</h4>
              <p>Study tours to advanced countries for global exposure</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">04</span>
              <h4>District Training</h4>
              <p>Hands-on experience in district administration for one year</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
