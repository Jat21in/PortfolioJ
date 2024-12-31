import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import MicroscopeModelContainer from "./microscope/MicroscopeModelContainer";
import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: `${import.meta.env.BASE_URL}service1.png`,
    title: "Web Development",
    counter: 18,
  },
  {
    id: 2,
    img: `${import.meta.env.BASE_URL}service2.png`,
    title: "Product Design",
    counter: 3,
  },
  {
    id: 3,
    img: `${import.meta.env.BASE_URL}service3.png`,
    title: "Research Innovation",
    counter: 2,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        {/* Title */}
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>

        {/* Service List */}
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Counter List */}
        <div className="counterList">
          <Counter from={0} to={24} text="Projects Completed" />
          <Counter from={0} to={2} text="Happy Clients" />
        </div>
      </div>

      <div className="sSection right">
        {/* Model Container */}
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <ConsoleModelContainer />
        ) : (
          <MicroscopeModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
