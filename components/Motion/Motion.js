import { motion } from "framer-motion";

const Motion = (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: props.initialPositionY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
          delay: 0.5
      }}
    >
      {props.children}
    </motion.div>
  );
};

Motion.defaultProps = {
    initialPositionY: 100
};

export default Motion;
