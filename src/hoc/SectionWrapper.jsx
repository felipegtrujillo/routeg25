import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion.js';

const SectionWrapper = (Component, idName) =>
  function HOC(props) { // Recibe props
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-full mx-auto  relative z-0`}
      >
        {/* Anchor/Hash for section ID */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Pasamos las props al componente */}
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
