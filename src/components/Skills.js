import { motion } from "framer-motion";

const skills = [
  "Java",
  
"JavaScript",
"TypeScript",
"CSS",
"HTML",
"MySQL",
"React",
"Node.js",
"spring boot",
"Laravel",
"Git/GitHub/Bitbucket",
"CI/CD",
"Jaspersoft",
"Figma",

];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="skill-card"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
