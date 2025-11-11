"use client"; // 

import React from 'react';
import { motion } from 'framer-motion';

// 
// このコンポーネントは、子要素（children）を
// 画面に表示されたときに「ふわっ」とさせる役割を持ちます
//
const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      // 
      initial="hidden" // 
      whileInView="visible" // 
      viewport={{ once: true, amount: 0.2 }} // 
      // 
      transition={{ duration: 0.5 }} // 
      // 
      variants={{
        hidden: { opacity: 0, y: 30 }, // 
        visible: { opacity: 1, y: 0 }, // 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
