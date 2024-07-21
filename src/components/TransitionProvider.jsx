"use client";

import React from "react";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed m-auto left-0 top-0 bottom-0 right-0 text-white cursor-default text-8xl  z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="w-screen h-screen fixed bg-black  rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>

        {/* CHANGED THE H-[CALC(100VH-6REM)] TO FLEX-GROW */}
        <div className="flex-grow ">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
