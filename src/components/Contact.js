import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section"
    >
      <h2>Contact</h2>
      <p>Email: sudeepawicramarachchi8@gmail.com</p>
      
    </motion.section>
  );
}
