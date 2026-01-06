import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";





export default function Navbar() {
    const { dark, setDark } = useContext(ThemeContext);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
     
<button onClick={() => setDark(!dark)} className="toggle">
 
</button>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
       
      </ul>
    </motion.nav>
    
  );
}
