import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";


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
            "Developed solutions to optimize workflows and enhance security.",
            1000,
            "Author of 5+ Scopus-indexed papers in AI and ML-driven technologies.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src={`${import.meta.env.BASE_URL}man.png`} alt="" />
    </motion.div>
  );
};

export default Speech;