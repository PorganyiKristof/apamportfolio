"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AchievementsSection from "./AchivementsSection";

export default function HeroSection() {
  return (
    <section className="hero-section mt-8 md:mt-48 flex md:justify-center md:items-center">
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-12 ">
        <div className="col-span-7 text-black h-full flex flex-col justify-center text-center md:text-left">
          <motion.div
            initial={{ transform: "translateX(-150%)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-4xl lg:text-6xl text-primary-800 font-bold">
              Szia, Porgányi Balázs vagyok
            </h1>
            <p className="text-lg mt-4 md:text-lg lg:text-2xl m-auto ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nesciunt optio omnis ullam ea nobis mollitia
              facilis. Alias corporis et accusantium fugit, maiores autem earum!
            </p>
          </motion.div>
          <AchievementsSection />
        </div>
        <motion.div
          initial={{ transform: "translateX(150%)", opacity: 0 }}
          animate={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-5 w-full"
        >
          <div className="relative text-center w-full ">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="m-auto rounded-full w-full opacity-90 "
              width="300"
              height="300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
