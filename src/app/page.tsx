"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Experience from "@/components/sections/Experience";
import Expertise from "@/components/sections/Expertise";
import Name from "@/components/sections/Name";
import Works from "@/components/sections/Works";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <Name />
      <Expertise />
      <Works />
      <Experience />
      <Footer />
    </>
  );
};

export default page;
