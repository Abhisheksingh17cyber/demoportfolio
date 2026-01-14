import { motion } from 'framer-motion';
import { FaBook, FaClock, FaLightbulb, FaChartLine, FaPen, FaTrophy } from 'react-icons/fa';
import './ExamPreparation.css';

const ExamPreparation = () => {
  const timeline = [
    {
      phase: "Foundation Phase",
      duration: "6-8 Months",
      icon: <FaBook />,
      activities: [
        "NCERT Books (Class 6-12)",
        "Basic Concepts Building",
        "Current Affairs Reading",
        "Newspaper Analysis (The Hindu)"
      ],
      color: "#0A2647"
    },
    {
      phase: "Prelims Preparation",
      duration: "8-10 Months",
      icon: <FaClock />,
      activities: [
        "Standard Books Coverage",
        "Previous Year Papers",
        "Mock Tests (Weekly)",
        "CSAT Practice"
      ],
      color: "#144272"
    },
    {
      phase: "Mains Preparation",
      duration: "10-12 Months",
      icon: <FaPen />,
      activities: [
        "Answer Writing Practice",
        "Optional Subject Mastery",
        "Essay Writing Skills",
        "GS Papers (4 Papers)"
      ],
      color: "#205295"
    },
    {
      phase: "Interview Preparation",
      duration: "2-3 Months",
      icon: <FaTrophy />,
      activities: [
        "Personality Development",
        "Current Affairs Mastery",
        "Mock Interviews",
        "Communication Skills"
      ],
      color: "#D4AF37"
    }
  ];

  const examStats = [
    { label: "Total Aspirants", value: "10+ Lakhs", icon: <FaChartLine /> },
    { label: "Prelims Qualifiers", value: "10-15K", icon: <FaLightbulb /> },
    { label: "Mains Qualifiers", value: "2000+", icon: <FaPen /> },
    { label: "Final Selection", value: "900-1000", icon: <FaTrophy /> }
  ];

  const subjects = [
    { name: "History", papers: "Prelims + Mains", importance: "High" },
    { name: "Geography", papers: "Prelims + Mains", importance: "High" },
    { name: "Polity", papers: "Prelims + Mains", importance: "Very High" },
    { name: "Economics", papers: "Prelims + Mains", importance: "High" },
    { name: "Environment", papers: "Prelims + Mains", importance: "Medium" },
    { name: "Science & Tech", papers: "Prelims + Mains", importance: "High" },
    { name: "Current Affairs", papers: "All Stages", importance: "Very High" },
    { name: "Ethics", papers: "Mains (GS4)", importance: "High" }
  ];

  return (
    <section className="exam-preparation" id="preparation">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>IAS Exam Preparation Journey</h2>
          <p>The Path to Civil Services Excellence</p>
        </motion.div>

        {/* Exam Statistics */}
        <div className="exam-stats">
          {examStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card"
              whileHover={{ y: -10 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Preparation Timeline */}
        <div className="prep-timeline">
          {timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-content" style={{ borderColor: phase.color }}>
                <div className="timeline-icon" style={{ backgroundColor: phase.color }}>
                  {phase.icon}
                </div>
                <h3>{phase.phase}</h3>
                <div className="duration">{phase.duration}</div>
                <ul className="activities">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subject Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="subjects-section"
        >
          <h3>Key Subjects to Master</h3>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="subject-card"
                whileHover={{ scale: 1.05 }}
              >
                <h4>{subject.name}</h4>
                <p className="papers">{subject.papers}</p>
                <span className={`importance importance-${subject.importance.toLowerCase().replace(' ', '-')}`}>
                  {subject.importance}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="success-tips"
        >
          <h3>Keys to Success</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <FaBook className="tip-icon" />
              <h4>Consistent Reading</h4>
              <p>Daily newspaper and monthly magazines are essential</p>
            </div>
            <div className="tip-card">
              <FaPen className="tip-icon" />
              <h4>Answer Writing</h4>
              <p>Practice writing 10-15 answers daily for Mains</p>
            </div>
            <div className="tip-card">
              <FaLightbulb className="tip-icon" />
              <h4>Smart Revision</h4>
              <p>Multiple revisions with notes and mind maps</p>
            </div>
            <div className="tip-card">
              <FaTrophy className="tip-icon" />
              <h4>Mock Tests</h4>
              <p>Regular test series to track progress</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExamPreparation;
