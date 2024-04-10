import Magnetic from "../Magnetic";
import { motion } from "framer-motion";
export default function Link({ data, index }) {
  const calculateDuration = (index) => {
    return 0.8 + index * 0.1;
  };

  return (
    <Magnetic>
      <motion.h1
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: calculateDuration(index), ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        className="link"
      >
        {data.title}
      </motion.h1>
    </Magnetic>
  );
}
