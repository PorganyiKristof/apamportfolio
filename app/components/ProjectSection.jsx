"use client";
import React, { useRef } from "react";
import PROJECT_DATA from "../data/ProjectData";
import ReactCompareImage from "react-compare-image";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageFlexChange = ({ key, data }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 80%"],
  });
  const animateShowUp = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <motion.div
      style={{ x: animateShowUp }}
      ref={ref}
      className="project mt-8 border-2 border-primary-800 rounded-xl overflow-hidden"
    >
      {key / 2 == 0 && <div>{data.text}</div>}
      <ReactCompareImage
        aspectRatio="wider"
        leftImage={data.before}
        rightImage={data.after}
      />
      {key / 2 != 0 && (
        <div className="flex items-center px-8 py-4 text-sm">{data.text}</div>
      )}
    </motion.div>
  );
};

export default function ProjectSection() {
  return (
    <section id="projects" className="project-section my-48 text-center ">
      <h1 className="text-4xl font-bold  mb-12 text-primary-800">
        Projektjeim
      </h1>
      <div className="md:grid grid-cols-fluid gap-10">
        {PROJECT_DATA.map((data, index) => (
          <ImageFlexChange key={index} data={data} />
        ))}
      </div>
    </section>
  );
}
