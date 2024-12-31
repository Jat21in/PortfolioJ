import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: `${import.meta.env.BASE_URL}p1.png`,
    title: "Banking Operational Efficiency",
    desc: "Enhances the operational efficiency of banking processes through the integration of generative AI. By automating routine tasks and optimizing workflows, aim to reduce processing time, minimize errors, optimize resource allocation, provide intelligent insights for process improvements and decision-making support additionally, implement high-security measures using advanced blockchain techniques, specifically Ethereum, to ensure maximum protection.",
    link: "https://github.com/Jat21in/Operational-Efficiency-",
  },
  {
    id: 2,
    img: `${import.meta.env.BASE_URL}p2.png`,
    title: "HydroHarmony: Smart Irrigation",
    desc: "HydroHarmony is a state-of-the-art system designed to revolutionize irrigation and fertilization management in agriculture through the use of advanced machine learning techniques. The system leverages Support Vector Machine (SVM) classification and Random Forest algorithms to optimize water and fertilizer distribution, ensuring precise decision-making that maximizes crop yield and minimizes resource waste.",
    link: "https://github.com/Jat21in/HydroHarmonay",
  },
  {
    id: 3,
    img: `${import.meta.env.BASE_URL}p3.png`,
    title: "Advanced Calculator",
    desc: "The Advanced Mathematical Calculator is a versatile Java-based tool designed to perform a comprehensive range of mathematical operations with precision and efficiency. It includes basic arithmetic functions, exponentiation, logarithmic calculations, and trigonometric evaluations, alongside advanced features like HCF/LCM computation, factorials, and geometry problem-solving for various 3D shapes. Equipped with an intuitive interface and robust functionality.",
    link: "https://github.com/Jat21in/Advanced_Mathematical_Calculator",
  },
  {
    id: 4,
    img: `${import.meta.env.BASE_URL}p4.png`,
    title: "Groundwater Research Innovation",
    desc: "This research delves into advanced discretization techniques for groundwater flow and contaminant transport modeling, addressing nonlinearities like porosity variations and reaction-dependent dynamics. It provides precision-driven numerical solutions and comparative analyses, offering significant insights into hydraulic head patterns, contaminant plume evolution, and nonlinear contributions in coupled hydrogeological systems.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YAj1nikAAAAJ&citation_for_view=YAj1nikAAAAJ:u5HHmVD_uO8C",
  },
  {
    id: 5,
    img: `${import.meta.env.BASE_URL}p5.jpg`,
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a
          variants={textVariants}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
