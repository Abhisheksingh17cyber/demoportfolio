import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: 'District Development Meeting',
      category: 'Administration',
      description: 'Conducting strategic planning session with district officials'
    },
    {
      title: 'Rural Outreach Program',
      category: 'Community',
      description: 'Engaging with rural communities for grassroot feedback'
    },
    {
      title: 'Smart City Launch',
      category: 'Technology',
      description: 'Inaugurating smart city command and control center'
    },
    {
      title: 'Women Empowerment Initiative',
      category: 'Social Welfare',
      description: 'Meeting with women self-help groups'
    },
    {
      title: 'Educational Institution Visit',
      category: 'Education',
      description: 'Inspecting quality education facilities'
    },
    {
      title: 'Health Camp Organization',
      category: 'Healthcare',
      description: 'Launching mobile health clinics in rural areas'
    }
  ];

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Gallery</h2>
          <div className="divider"></div>
          <p>Glimpses of public service and community engagement</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image">
                <div className="placeholder-image"></div>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <div className="lightbox-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-category">{selectedImage.category}</p>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
