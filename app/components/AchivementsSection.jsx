"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projektek",
    value: "200",
    postfix: "+",
  },
  /* {
    metric: "Stores",
    value: "2",
    postfix: "",
  },
  {
    prefix: "~",
    metric: "Skills",
    value: "70",
  }, */
  {
    metric: "Tapasztalat",
    value: "30",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="my-8 md:mb-0">
      <div className="border-[#33353F] border rounded-md py-4 px-8 flex flex-row items-center justify-center w-full md:w-fit">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-black text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                  fontStyle={{
                    fontSize: 30,
                    color: "black",
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-black text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
