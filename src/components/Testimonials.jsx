import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Secretary',
      image: '👤',
      text: 'Ms. Ankita Singh has demonstrated exceptional leadership and commitment to public welfare. Her innovative approach to governance has set new benchmarks in administrative excellence.',
      rating: 5
    },
    {
      name: 'Smt. Priya Sharma',
      position: 'Community Leader',
      image: '👤',
      text: 'Under her administration, our district has seen remarkable development. The implementation of welfare schemes has been transparent and efficient, truly benefiting the people.',
      rating: 5
    },
    {
      name: 'Prof. Amit Patel',
      position: 'Development Expert',
      image: '👤',
      text: 'A role model for young civil servants. Her evidence-based policy making and people-centric approach have brought transformative changes to the region.',
      rating: 5
    },
    {
      name: 'Sri. Ramesh Gupta',
      position: 'Business Association President',
      image: '👤',
      text: 'The ease of doing business has improved significantly under her tenure. Her support for MSMEs and industrial development is commendable.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Testimonials</h2>
          <div className="divider"></div>
          <p>Recognition from colleagues and community leaders</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-image">{testimonial.image}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
