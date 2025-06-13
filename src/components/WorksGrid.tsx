"use client";
import { WORKS_DATA } from "@/model/works";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  initial: { opacity: 1, y: 0 },
  hover: { opacity: 0, y: -20 },
};

const revealVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};

const WorksGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 w-full"
    >
      {WORKS_DATA.map((work, index) => {
        // Custom layout only on large screens
        let customClass = "";
        if (index === 3) customClass = "lg:col-start-3 lg:row-start-2";
        if (index === 4)
          customClass = "lg:col-span-2 lg:col-start-1 lg:row-start-2";

        return (
          <motion.div
            key={work.id}
            variants={itemVariants}
            initial="initial"
            whileInView="show"
            whileHover="hover"
            className={`${customClass} group border relative w-full h-[300px] sm:h-[350px] rounded overflow-hidden shadow-lg cursor-pointer transition-shadow hover:shadow-2xl`}
          >
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={`/works/${work.image}.png`}
                alt={work.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end items-start">
              <div className="p-4 text-white bg-gray-950 w-full">
                <p className="text-lg font-bold">{work.name}</p>
                <div className="relative h-5 overflow-hidden">
                  <motion.p
                    variants={textVariants}
                    className="absolute text-sm text-muted-foreground"
                  >
                    {work.type}
                  </motion.p>
                  <motion.p
                    variants={revealVariants}
                    className="absolute text-sm text-muted-foreground hover:text-[#45388f] transition-colors duration-300"
                  >
                    <Link href={work.url} target="_blank">
                      Show Project
                    </Link>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default WorksGrid;
