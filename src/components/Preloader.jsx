import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ setLoading }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      // Calculate delay based on current count
      const delay = Math.pow(count / 65, 2) * 50 + 20;
      const timeout = setTimeout(() => {
        setCount(count + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  useEffect(() => {
    if (count >= 100) {
      setTimeout(() => {
        setLoading();
      }, 1000);
    }
  }, [count]);

  return (
    <motion.div
      className="preloader"
      initial={{ y: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.4 }}
    >
      <motion.span
        className="count"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {count}%
      </motion.span>
    </motion.div>
  );
}

//old code

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ClimbingBoxLoader } from "react-spinners";
// import { useLockBodyScroll } from "@uidotdev/usehooks";
// export default function Preloader() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useLockBodyScroll();
//   const word = "Hello";

//   return (
//     <motion.div
//       className="preloader"
//       initial={{ y: "0" }}
//       exit={{ y: "-100vh" }}
//       transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.4 }}
//     >
//       {word.split("").map((word, index) => {
//         return (
//           <span className="Hello-mask">
//             <motion.span
//               className="Hello"
//               key={index}
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 delay: 0.2 * index,
//                 ease: [0.61, 1, 0.88, 1],
//                 duration: 0.4,
//               }}
//             >
//               {word}
//             </motion.span>
//           </span>
//         );
//       })}
//     </motion.div>
//   );
// }
