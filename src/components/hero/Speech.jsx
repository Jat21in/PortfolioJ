import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Achieved 93% in NPTEL's 'Foundations of Cloud, IoT, and Edge ML' by the Government of India.",
            1000,
            "Author of 5+ Scopus-indexed research papers in AI and ML-based technologies.",
            1000,
            "Recognized as the Best Intern Performer at CDAC Mohali – Cyber Analyst Internship.",
            1000,
            "Promoted to Joint Secretary of the ISTE Technical Society at Chandigarh University.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src={`${import.meta.env.BASE_URL}man.png`} alt="Profile" />
    </motion.div>
  );
};

export default Speech;
