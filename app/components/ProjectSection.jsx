"use client";
import React, { useRef } from "react";
import PROJECT_DATA from "../data/ProjectData";
import ReactCompareImage from "react-compare-image";
import { motion, useInView, useTransform } from "framer-motion";

const ImageSection = ({ key, data }) => {
  const ref = useRef();
  /* const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 80%"],
  }); */
  const isInView = useInView(ref, { once: false });

  /* const animateShowUp = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); */
  return (
    <motion.div
      /* style={{ x: animateShowUp }} */
      transition={{ duration: 1 }}
      initial={{
        transform: "translateY(100px)",
        opacity: 0,
      }}
      animate={
        isInView && {
          transform: "translateX(0px)",
          opacity: 1,
        }
      }
      ref={ref}
      className="project mt-8 border-2 border-primary-800 rounded-xl overflow-hidden"
    >
      <span className="md:hidden">
        <ReactCompareImage
          aspectRatio="taller"
          leftImage={data.before}
          rightImage={data.after}
        />
      </span>
      <span className="hidden md:block">
        <ReactCompareImage
          aspectRatio="wider"
          leftImage={data.before}
          rightImage={data.after}
        />
      </span>
      {/* {key / 2 != 0 && (
        <div className="flex items-center px-8 py-4 text-sm text-justify max-h-48">
          {data.text}
        </div>
      )} */}
    </motion.div>
  );
};

export default function ProjectSection() {
  return (
    <section id="projects" className="project-section my-8 text-center">
      <h1 className="text-4xl font-bold  mb-12 text-primary-800">
        Projektjeim
      </h1>
      <div className="md:grid grid-cols-fluid gap-10">
        {PROJECT_DATA.map((data, index) => (
          <ImageSection key={index} data={data} />
        ))}
      </div>
    </section>
  );
}
