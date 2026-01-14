import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBook, FaMicrophone, FaNewspaper, FaAward } from 'react-icons/fa';
import './Publications.css';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const publications = [
    {
      type: 'article',
      icon: <FaNewspaper />,
      title: 'Digital Transformation in Rural Governance',
      publication: 'Journal of Public Administration',
      date: 'December 2023',
      description: 'An in-depth analysis of implementing digital solutions in rural administrative systems.',
      color: '#0A2647'
    },
    {
      type: 'speech',
      icon: <FaMicrophone />,
      title: 'Women Empowerment Through Policy',
      event: 'National Conference on Governance',
      date: 'October 2023',
      description: 'Keynote address on creating inclusive policies for women empowerment.',
      color: '#205295'
    },
    {
      type: 'book',
      icon: <FaBook />,
      title: 'Sustainable Development in Practice',
      publisher: 'Academic Press',
      date: 'August 2023',
      description: 'Co-authored book on implementing SDGs at district level.',
      color: '#144272'
    },
    {
      type: 'paper',
      icon: <FaAward />,
      title: 'Innovations in Public Service Delivery',
      publication: 'Government Research Quarterly',
      date: 'June 2023',
      description: 'Research paper on best practices in citizen service delivery.',
      color: '#2E73B8'
    }
  ];

  return (
    <section className="publications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Publications & Speeches</h2>
          <div className="divider"></div>
          <p>Thought leadership and contributions to public administration</p>
        </motion.div>

        <div className="publications-grid">
          {publications.map((item, index) => (
            <motion.div
              key={index}
              className="publication-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="publication-header" style={{ '--accent-color': item.color }}>
                <div className="publication-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span className="publication-type">{item.type}</span>
              </div>

              <h3>{item.title}</h3>
              
              <div className="publication-meta">
                <span className="meta-item">
                  {item.publication || item.event || item.publisher}
                </span>
                <span className="meta-date">{item.date}</span>
              </div>

              <p>{item.description}</p>

              <motion.button
                className="read-more-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More →
              </motion.button>

              <div className="card-corner"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
