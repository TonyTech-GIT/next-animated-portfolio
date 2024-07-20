"use client";

import React from "react";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const TransitionProvider = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="w-screen min-h-screen bg-gradient-to-b from-blue-100 to-red-100">
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
