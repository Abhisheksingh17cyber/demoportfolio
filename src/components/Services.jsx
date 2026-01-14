import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaBuilding, 
  FaLeaf, 
  FaUserGraduate, 
  FaHospital, 
  FaIndustry, 
  FaHandHoldingHeart 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <FaBuilding />,
      title: 'Urban Development',
      description: 'Smart city initiatives, infrastructure planning, and sustainable urban growth strategies',
      projects: ['Metro Expansion', 'Smart Traffic Management', 'Green Buildings']
    },
    {
      icon: <FaLeaf />,
      title: 'Rural Development',
      description: 'Empowering rural communities through livelihood programs and infrastructure development',
      projects: ['Rural Roads', 'Irrigation Projects', 'Skill Development']
    },
    {
      icon: <FaUserGraduate />,
      title: 'Education Reform',
      description: 'Quality education access, digital learning platforms, and institutional excellence',
      projects: ['E-Learning Hubs', 'Teacher Training', 'Scholarship Programs']
    },
    {
      icon: <FaHospital />,
      title: 'Healthcare Services',
      description: 'Universal healthcare access, telemedicine facilities, and preventive health programs',
      projects: ['Health Centers', 'Mobile Clinics', 'Disease Prevention']
    },
    {
      icon: <FaIndustry />,
      title: 'Industrial Growth',
      description: 'Promoting entrepreneurship, MSMEs support, and industrial policy implementation',
      projects: ['Industrial Parks', 'Startup Incubators', 'Investment Promotion']
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Social Welfare',
      description: 'Women empowerment, child welfare, and inclusive development programs',
      projects: ['Women SHGs', 'Child Nutrition', 'Disability Support']
    }
  ];

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Areas of Service</h2>
          <div className="divider"></div>
          <p>Key focus areas and administrative responsibilities</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="icon-bg"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-projects">
                <h4>Recent Initiatives:</h4>
                <ul>
                  {service.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
