import Magnetic from "../Magnetic";
import { motion } from "framer-motion";
import WavyWords from "../wavy words/WavyWords";
export default function Link({ data, index }) {
  const calculateDuration = (index) => {
    return 0.8 + index * 0.1;
  };

  const scrollTo = data.id;

  return (
    <Magnetic>
      <motion.h1
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: calculateDuration(index), ease: "easeInOut" }}
        // whileHover={{ scale: 1.1 }}
        className="link"
        onClick={() => {
          const ref = document.getElementById(scrollTo);
          ref.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <WavyWords>{data.title}</WavyWords>
      </motion.h1>
    </Magnetic>
  );
}
