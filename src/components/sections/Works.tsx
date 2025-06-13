import React from "react";
import WorksGrid from "../WorksGrid";
import { motion } from "framer-motion";
import { text_variant } from "@/lib/utils";

const Works = () => {
  return (
    <section
      id="works"
      className="w-full flex items-center justify-center min-h-screen py-16 px-6"
    >
      <div className="container mx-auto flex flex-col justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-auto flex items-center justify-center mb-10">
          <motion.h2
            variants={text_variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            My Works
          </motion.h2>
        </div>
        <WorksGrid />
      </div>
    </section>
  );
};

export default Works;
