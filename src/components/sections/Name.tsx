"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { robotoMono, text_variant } from "@/lib/utils";

const Name = () => {
  return (
    <section className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <motion.p
            variants={text_variant}
            initial="hidden"
            animate="visible"
            custom={1}
            className={`${robotoMono.className} text-base sm:text-lg md:text-xl font-semibold`}
          >
            ALLEN TIEMPO
          </motion.p>
          <motion.p
            variants={text_variant}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900"
          >
            Software Developer
          </motion.p>
          <motion.p
            variants={text_variant}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-sm sm:text-base md:text-lg font-light max-w-xl"
          >
            A Software Developer based in Cebu City, Philippines. With a passion
            for web development and software engineering, I am dedicated to
            creating innovative and efficient web and software solutions. Feel
            free to explore, connect, and join me!
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          variants={text_variant}
          initial="hidden"
          animate="visible"
          custom={4}
          className="relative rounded-full overflow-hidden shadow-[-20px_20px_100px_rgba(255,255,255,0.15)] hover:shadow-2xl transition-shadow duration-300 w-48 h-48 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/name/grad-pic.jpg"
            alt="Allen Tiempo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Name;
