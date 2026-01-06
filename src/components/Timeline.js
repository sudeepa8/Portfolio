import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Timeline() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <h2>Education & Experience</h2>

      {/* Experience – Special Card */}
      <motion.div
        className="experience-glass"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="exp-left">
          <Briefcase size={22} />
          <span className="exp-tag">Experience</span>
        </div>

        <div className="exp-right">
          <h3>Intern Software Engineer</h3>
          <span className="company">Sri Lanka Telecom (Services) Ltd</span>
          <p>
            MIS Reporting Application Development: Developed a reporting system to generate dynamic MIS reports for data-driven decisions. Implemented backend with Java, Spring Boot, JPA, and MySQL, frontend with ReactJS and Ant Design, and used JasperReports for structured reporting. Designed UI/UX using Figma.

Core Banking Application Development: Contributed to a core banking system handling account management and transactions. Built with Java EE, Spring Core, Hibernate, MySQL, and Expression Language (EL) to ensure secure and efficient operations.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            
          </div>
        </div>
      </motion.div>
      <motion.div
        className="experience-glass"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="exp-left">
          <Briefcase size={22} />
          <span className="exp-tag">Experience</span>
        </div>

        <div className="exp-right">
          <h3>Intern Software Engineer</h3>
          <span className="company">Sri Lanka Telecom PLC</span>
          <p>
            Provided support for web application development at Sri Lanka Telecom, contributing to Java (Spring Boot) backend services and React-based frontend development. Assisted in debugging, feature enhancements, and integration to ensure reliable and efficient application performance.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
          </div>
        </div>
      </motion.div>

      <div className="timeline">
        {/* Education */}
        <div className="timeline-item">
          <h3>BT(Hons)information and Communication Technology</h3>
          <span>General Sir John Kotelawala Defence University</span>
          <p>2022 – 2026</p>
        </div>

        {/* Project */}
        
      </div>
    </motion.section>
  );
}
