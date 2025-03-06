import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col justify-center items-center text-center text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <img src="./btlogo.png" alt="Logo" className="w-auto h-10 mb-4" />
      <p className="text-sm tracking-widest">
        Powered by Black Turban Solutions
      </p>
    </motion.div>
  );
};

export default SplashScreen;
