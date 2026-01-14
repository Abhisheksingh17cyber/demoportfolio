import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office Address',
      info: 'District Collectorate, Metropolitan District',
      subinfo: 'State Administration Building'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      info: 'ankita.singh@gov.in',
      subinfo: 'dc.office@gov.in'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      info: '+91-11-2345-6789',
      subinfo: 'Mon - Fri, 10:00 AM - 5:00 PM'
    }
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get in Touch</h2>
          <div className="divider"></div>
          <p>For official matters and public grievances</p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-desc">
              For official communication, public grievances, or inquiries regarding
              administrative matters, please reach out through the following channels.
            </p>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                  <span>{item.subinfo}</span>
                </div>
              </motion.div>
            ))}

            <div className="office-hours">
              <h4>Office Hours</h4>
              <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 1:00 PM</p>
              <p>Sunday & Public Holidays: Closed</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
