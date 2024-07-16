"use client";

import React from "react";
import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 100,
      y: 400,
      opacity: 0.3,
      transition: {
        duration: 3,
      },
    },
    variant2: {
      x: 100,
      y: -400,
      opacity: 0.3,
      rotation: 90,
    },
  };
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="h-96 w-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        variants={variants}
        animate="variant1"
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
