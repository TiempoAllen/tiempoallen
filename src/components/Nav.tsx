"use client";
import Link from "next/link";
import React, { useState } from "react";
import { robotoMono, text_variant } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
];

const Nav = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.nav
      variants={text_variant}
      initial="hidden"
      animate="visible"
      custom={0}
      className="w-full bg-transparent text-white sticky top-0 z-50 backdrop-blur-md lg:px-12"
    >
      <div className="container flex items-center justify-between mx-auto p-4">
        <Link href="/">
          <h1
            className={`${robotoMono.className} text-2xl font-bold leading-tight tracking-tighter hidden lg:block`}
          >
            ALLEN TIEMPO
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link, index) => (
            <motion.span
              key={link.href}
              onHoverStart={() => setHoveredLink(index)}
              onHoverEnd={() => setHoveredLink(null)}
              animate={{
                opacity:
                  hoveredLink === null || hoveredLink === index ? 1 : 0.4,
                transition: { duration: 0.3 },
              }}
            >
              <Link href={link.href}>
                <span className="text-lg font-normal leading-tight tracking-tighter cursor-pointer">
                  {link.label}
                </span>
              </Link>
            </motion.span>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pb-4"
          >
            <div className="flex flex-col gap-4 mt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-normal tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
