import { EXPERTISE_DATA } from "@/model/expertise";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { text_variant } from "@/lib/utils";

const Expertise = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-16">
        <motion.h2
          variants={text_variant}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter text-center"
        >
          My Expertise
        </motion.h2>

        <motion.ul
          variants={text_variant}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-6xl"
        >
          {EXPERTISE_DATA.map((expertise, index) => {
            const underlineClass =
              index === 0
                ? "before:bg-[#FF0080]"
                : index === 1
                  ? "before:bg-[hsl(216,100%,50%)]"
                  : "before:bg-[#ff7b00]";
            return (
              <li
                key={expertise.id}
                className="flex flex-col items-center justify-center max-w-sm text-center"
              >
                <div className="flex flex-row items-center gap-4 mb-4">
                  <Image
                    src={`/${expertise.icon}.svg`}
                    alt={expertise.title}
                    width={72}
                    height={72}
                  />
                  <div className="flex flex-col items-center sm:items-start justify-start">
                    <p
                      className={clsx(
                        "text-xl sm:text-2xl md:text-3xl font-bold relative overflow-hidden z-0 before:content-[''] before:absolute before:top-[65%] before:left-0 before:w-full before:h-[15%] before:-z-10",
                        underlineClass
                      )}
                    >
                      {expertise.title}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {expertise.sub_title}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg px-4 sm:px-6">
                  {expertise.content}
                </p>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Expertise;
