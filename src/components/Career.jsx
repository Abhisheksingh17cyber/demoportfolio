import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import './Career.css';

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const positions = [
    {
      year: '2023 - Present',
      title: 'District Collector',
      location: 'Metropolitan District',
      description: 'Leading comprehensive district administration with focus on digital governance, citizen services, and sustainable development initiatives.',
      achievements: [
        'Implemented e-governance platform serving 2M+ citizens',
        'Reduced processing time for citizen services by 60%',
        'Launched 15+ development projects worth ₹500 Crores'
      ]
    },
    {
      year: '2020 - 2023',
      title: 'Additional Secretary',
      location: 'State Planning Department',
      description: 'Spearheaded strategic planning and policy formulation for statewide development programs.',
      achievements: [
        'Designed flagship rural development program',
        'Coordinated inter-departmental projects',
        'Achieved 95% target completion rate'
      ]
    },
    {
      year: '2017 - 2020',
      title: 'Sub-Divisional Magistrate',
      location: 'Rural Sub-Division',
      description: 'Managed revenue administration, law and order, and development activities in rural sub-division.',
      achievements: [
        'Improved agricultural productivity by 40%',
        'Established 50+ rural health centers',
        'Zero pendency in land record digitization'
      ]
    },
    {
      year: '2014 - 2017',
      title: 'Assistant Collector',
      location: 'District Headquarters',
      description: 'Assisted in district administration, revenue management, and implementation of government schemes.',
      achievements: [
        'Streamlined revenue collection process',
        'Supervised welfare scheme distribution',
        'Led disaster management operations'
      ]
    },
    {
      year: '2008 - 2014',
      title: 'IAS Training & Probation',
      location: 'LBSNAA, Mussoorie & State',
      description: 'Comprehensive training in administration, public policy, and field experience in various departments.',
      achievements: [
        'Completed foundational training at LBSNAA',
        'District training in multiple departments',
        'Specialized courses in public administration'
      ]
    }
  ];

  return (
    <section className="career" id="career" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Career Journey</h2>
          <div className="divider"></div>
          <p>A chronicle of service, leadership, and impact</p>
        </motion.div>

        <div className="timeline">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{position.year}</div>
                <div className="timeline-card">
                  <div className="card-header">
                    <h3>{position.title}</h3>
                    <div className="location">
                      <FaMapMarkerAlt />
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <p className="card-description">{position.description}</p>
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {position.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
