import { motion } from "framer-motion";

import "./TransitionEffect.css";

function TransitionEffect() {
  return (
    <>
      <motion.div
        className="transition-effect__background-one"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        exit={{ width: ["0%", "100%"] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="transition-effect__background-two"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        exit={{ width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="transition-effect__background-three"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        exit={{ width: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.1, ease: "easeInOut" }}
      />
    </>
  );
}

export default TransitionEffect;
