import { Rnd } from 'react-rnd'
import "./macwindow.scss"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MacWindow = ({ children, width = "60vw", height = "70vh", onClose }) => {
  return (
    <Rnd default={{ width: width, height: height, x: 300, y: 200 }} className='rnd'>
      
      {/* 👇 Animate THIS div, not Rnd */}
      <motion.div
        className="window"
        initial={{
          scale: 0.80,
          opacity: 0,
          y: 40,
          filter: "blur(10px)"
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }}                                      
        exit={{ 
            opacity: 0,
            scale: 0.8,
            
        }}
        transition={{
          duration: 0.35,
          ease: [0.39, 0.24, 0.3, 1]
        }}
      >
        <div className="nav">
          <div className="dots">
            <div className="dot red" onClick={onClose}></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>ankitdhilpe - zsh-</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </motion.div>

    </Rnd>
  );
};

export default MacWindow;                       