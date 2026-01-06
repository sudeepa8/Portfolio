import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <h2>About Me</h2>
      <p>
        As a motivated graduate of the Faculty of Technology, General Sir John Kotelawala Defence University, I am an adaptable and passionate software engineer with hands-on experience in designing, developing, and implementing innovative software solutions. Committed to optimizing code efficiency and performance, I continuously strive to stay ahead of emerging technologies and industry trends. With a self-driven mindset, I actively pursue learning in modern tools and frameworks. I am eager to apply my technical expertise and problem-solving abilities within a dynamic organization that values creativity, innovation, and forward-thinking development.
      </p>
    </motion.section>
  );
}
