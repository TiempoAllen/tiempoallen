"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EXPERIENCE_DATA } from "@/model/experience";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { text_variant } from "@/lib/utils";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center px-12"
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <motion.h2
          variants={text_variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-center"
        >
          Professional Experience
        </motion.h2>
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-3xl">
          <Accordion
            type="single"
            collapsible
            defaultValue={EXPERIENCE_DATA[0].id}
            className="flex flex-col gap-3 w-full"
          >
            {EXPERIENCE_DATA.map((experience) => (
              <AccordionItem
                value={experience.id}
                key={experience.id}
                className="flex flex-col gap-4"
              >
                <AccordionTrigger className="dark:bg-purple-700 dark:text-white text-md md:text-lg font-semibold px-6 py-4 rounded-sm cursor-pointer">
                  <div className="flex flex-col sm:flex-row justify-between w-full text-left gap-2 sm:gap-0">
                    <span>{experience.header}</span>
                    <span>{experience.dateRange}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 dark:bg-indigo-950 dark:text-white rounded-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center justify-start gap-2">
                        <MapPinIcon className="text-purple-700" />
                        <p className="text-sm text-gray-300">Remote</p>
                      </div>
                      <p className="text-base sm:text-lg">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.skills.map((skill, index) => (
                          <p
                            className="dark:bg-blue-900 py-2 px-4 text-sm text-gray-400 rounded-2xl"
                            key={index}
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <Image
                        src={`/experience/${experience.companyLogo}.png`}
                        alt={experience.header}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
