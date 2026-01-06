import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <h2>Projects</h2>

      <div className="projects">
        {/* Smart Ambulance Booking System */}
        <motion.div whileHover={{ scale: 1.05 }} className="project-card">
          <img
            src="/projects/ambulance.png"
            alt="Smart Ambulance Booking System"
            className="project-img"
          />
          <h3>Smart Emergency Pre-Hospital Request and Management System</h3>
          <p>
            designed and developed an innovative digital solution aimed at transforming how emergency medical services respond to patients in critical situations. SEPHAR streamlines the entire ambulance request workflow by enabling real-time communication, location tracking, and automated coordination between patients, drivers, and hospital emergency teams
          </p>
        </motion.div>

        {/* Employee Management System */}
        <motion.div whileHover={{ scale: 1.05 }} className="project-card">
          <img
            src="/projects/exam.jpg"
            alt="Employee Management System"
            className="project-img"
          />
          <h3>E-Learning and Exam Manegement system </h3>
          <p>
            Developed a web-based platform to manage online learning activities and examination processes, focusing on efficient content delivery and secure exam handling. The system supports user authentication, course and exam management, student enrollment, and result processing. Implemented RESTful APIs using Django REST Framework and built a responsive, user-friendly interface with ReactJS and Bootstrap, ensuring smooth interaction between frontend and backend components.
          </p>
        </motion.div>
        {/* Employee Management System */}
        <motion.div whileHover={{ scale: 1.05 }} className="project-card">
          <img
            src="/projects/hotel.jpg"
            alt="Employee Management System"
            className="project-img"
          />
          <h3>Restaurant Management System </h3>
          <p>
            Designed and developed a desktop-based system to enhance operational efficiency and improve user experience in food ordering and restaurant operations management. The system supports order processing, menu management, and basic reporting, enabling smoother coordination between staff and management. 
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
