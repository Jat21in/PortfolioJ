import React, { useState } from "react";
import "./certification.css";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbExternalLink } from "react-icons/tb"; // Importing the external link icon
import { motion } from "framer-motion";

const Certifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const certifications = [
    { 
      logo: `${import.meta.env.BASE_URL}nptel.png`,  
      name: "Foundation of Cloud IoT Edge ML", 
      issuer: "NPTEL - Skill India", 
      issued: "April 2025", 
      link: "https://drive.google.com/file/d/1tK4SXPyrQpn-AVM5wIFbukcKmG9oBL7G/view?usp=drivesdk"
    },
    { 
      logo: `${import.meta.env.BASE_URL}meta.png`,  
      name: "React Native", 
      issuer: "Meta", 
      issued: "Jan 2025", 
      link: "https://www.coursera.org/account/accomplishments/verify/059NDWE7IV44"
    },
    { 
      logo: `${import.meta.env.BASE_URL}colorado.png`, 
      name: "Developing Industrial IoT-Specialization Certificate", 
      issuer: "University of Colorado Boulder", 
      issued: "Mar 2024", 
      link: "https://www.coursera.org/account/accomplishments/specialization/H0R15DFV0JTJ"
    },
    { 
      logo: `${import.meta.env.BASE_URL}coursera.png`,  
      name: "Databases and SQL for Data Science", 
      issuer: "Coursera", 
      issued: "Mar 2024", 
      link: "https://www.coursera.org/account/accomplishments/records/W5GBSMRHGH82"
    },
    { 
      logo: `${import.meta.env.BASE_URL}coursera.png`, 
      name: "Relational Databases (RDBMS) Essentials", 
      issuer: "Coursera", 
      issued: "Mar 2024", 
      link: "https://www.coursera.org/account/accomplishments/records/AAJJWYKRQGR8"
    },
    { 
      logo: `${import.meta.env.BASE_URL}meta.png`, 
      name: "Introduction to Databases", 
      issuer: "Meta", 
      issued: "Feb 2024", 
      link: "https://www.coursera.org/account/accomplishments/records/ZASNE4EXYGC2"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`, 
      name: "Advanced Blockchain Development : Mastering Decentralized Systems", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Jan 2024", 
      link: "https://link-to-certificate-6"
    },
    { 
      logo: `${import.meta.env.BASE_URL}infosys.png`, 
      name: "Build DApps in Ethereum Blockchain", 
      issuer: "Infosys", 
      issued: "Jan 2024", 
      link: "https://drive.google.com/file/d/1-9W0dqVY205JNPTzSwVQTzZf3p4tbwmo/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}scalar.png`, 
      name: "Python Course for Beginners : Mastering Essentials", 
      issuer: "Scalar", 
      issued: "Dec 2023", 
      link: "https://drive.google.com/file/d/1zw5Rn3cPjvo2qGE5V8s4AZq8JOiYTVqg/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}scalar.png`, 
      name: "Python and SQL for Data Science", 
      issuer: "Scalar", 
      issued: "Dec 2023", 
      link: "https://drive.google.com/file/d/1zqiV30X6No2juW13xzFks7bxECadffmH/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}colorado.png`,  
      name: "Approximation Methods", 
      issuer: "University of Colorado Boulder", 
      issued: "Nov 2023", 
      link: "https://www.coursera.org/account/accomplishments/records/9NEJRXN9ESQQ"
    },
    { 
      logo: `${import.meta.env.BASE_URL}nptel.png`,  
      name: "Multi-Core Computer Architecture", 
      issuer: "NPTEL", 
      issued: "Nov 2023", 
      link: "https://drive.google.com/file/d/1zpCZ6wHwGKEa7jc3VPMXCdEw8d4YOXEs/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}ieee.png`,  
      name: "Nationwide Roadshow On Digital India RISC-V VEGA Processor", 
      issuer: "IEEE", 
      issued: "Nov 2023", 
      link: "https://drive.google.com/file/d/1-GGW-jwOO1OnQN5lhjb7t25Snog4Tn0N/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`, 
      name: "Bug Battle Royale(DSA Quiz)", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Oct 2023", 
      link: "https://drive.google.com/file/d/1zzm1AtktbF_LUfWd-oDqQxj-TbxH26rz/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`, 
      name: "Goblet of Fire(DSA Quiz)", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Oct 2023", 
      link: "https://www.coursera.org/account/accomplishments/records/MQR5VLAV578L"
    },
    { 
      logo: `${import.meta.env.BASE_URL}colorado.png`,  
      name: "Theory of Angular Momentum", 
      issuer: "University of Colorado Boulder", 
      issued: "Oct 2023", 
      link: "https://www.coursera.org/account/accomplishments/records/TYJW9LY6V9DS"
    },
    { 
      logo: `${import.meta.env.BASE_URL}colorado.png`, 
      name: "Foundations of Quantum Mechanics", 
      issuer: "University of Colorado Boulder", 
      issued: "Sep 2023", 
      link: "https://drive.google.com/file/d/1-ABi8W4iP68j0d16IoQeBcE7yAV1wI_E/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`,  
      name: "Procedure and Perks of IPR, Patent", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Sep 2023", 
      link: "https://drive.google.com/file/d/1zzm1AtktbF_LUfWd-oDqQxj-TbxH26rz/view?usp=sharing"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`,  
      name: "Data Science: Principles and Practices using R", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Aug 2023", 
      link: "https://link-to-certificate-19"
    },
    { 
      logo: `${import.meta.env.BASE_URL}yale.png`,  
      name: "Introduction to Psychology", 
      issuer: "Yale University", 
      issued: "Aug 2023", 
      link: "https://www.coursera.org/account/accomplishments/records/D9UR9N8RE558"
    },
    { 
      logo: `${import.meta.env.BASE_URL}ibm.png`,  
      name: "Introduction to R Programming for Data Science", 
      issuer: "IBM iX", 
      issued: "Aug 2023", 
      link: "https://www.coursera.org/account/accomplishments/records/2P7D5FGMMGSQ"
    },
    { 
      logo: `${import.meta.env.BASE_URL}cu.png`,  
      name: "Become a Successful Job hunter & Resume writing", 
      issuer: "CHANDIGARH UNIVERSITY", 
      issued: "Apr 2023", 
      link: "https://drive.google.com/file/d/1OEoHqZB6mKFYU9KCO9agaWUV_X8aKZah/view?usp=sharing"
    },
  ];

  return (
    <motion.div className="certifications-section">
      {/* Certification Icon Animation */}
      <motion.div
        className="certification-logo"
        onClick={handleOpen}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <PiCertificateDuotone />
        <div className="certification-title">Certification</div>
      </motion.div>

      {isOpen && (
        <div className="cert-popup">
          <div className="cert-popup-content">
            <div className="cert-header">
              <h2>Certifications</h2>
              <button className="close-btn" onClick={handleClose}>×</button>
            </div>

            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <img src={cert.logo} alt={`${cert.name} logo`} className="cert-logo" />
                  <div className="cert-details">
                    <h3>{cert.name}</h3>
                    <p>{cert.issuer}</p>
                    <p>{cert.issued}</p>
                    {cert.expired && <p>Expired: {cert.expired}</p>}
                    {cert.credentialID && <p>Credential ID: {cert.credentialID}</p>}
                    {cert.link && (
                      <button
                        className="show-credentials-btn"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        Show Certificate
                        <TbExternalLink style={{ marginLeft: "8px" }} /> {/* External link icon */}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Certifications;
