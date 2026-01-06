import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="profile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      />

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Hi, I'm Sudeepa 👋
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Full stack Developer | ICT Graduate
      </motion.p>
      <motion.a
  href="/Sudeepa_CV.pdf"
  download
  className="cv-btn"
  whileHover={{ scale: 1.1 }}
>
  Download CV
</motion.a>

    </div>
    
  );
}
