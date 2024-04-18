"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function AboutSection() {
  const inView = useRef();
  const isInView = useInView(inView, { once: true });

  return (
    <section className=" flex  justify-center mt-16" id="about">
      <div className="lg:grid md:grid-cols-2 gap-4 ">
        <div className="hidden md:block mt-8 relative rounded-lg aspect-video overflow-hidden">
          <Image
            src={"/images/about-image.jpg"}
            width={500}
            height={500}
            className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="about-image"
            loading="lazy"
          />
        </div>
        <motion.div
          ref={inView}
          transition={{ duration: 1 }}
          initial={{
            transform: "translateX(-50px)",
            opacity: 0,
          }}
          animate={
            isInView && {
              transform: "translateX(0px)",
              left: 0,
              opacity: 1,
            }
          }
          className=" text-center lg:text-left flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold  my-4 text-primary-800">Rólam</h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel
            exercitationem qui, quod laboriosam provident velit. Aliquid
            corrupti placeat quasi debitis amet deleniti voluptate, sunt dolorem
            nemo sapiente mollitia incidunt laudantium rerum asperiores dolor.
            Aperiam, sunt optio repudiandae ad sapiente accusamus magni commodi
            voluptates quo fuga ullam nobis suscipit quae.
          </p>
        </motion.div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{
            transform: "translateX(50px)",
            opacity: 0,
          }}
          animate={
            isInView && {
              transform: "translateX(0px)",
              left: 0,
              opacity: 1,
            }
          }
          className="md:hidden mt-8 relative rounded-lg aspect-video overflow-hidden"
        >
          <Image
            src={"/images/about-image.jpg"}
            width={500}
            height={500}
            className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="about-image"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
