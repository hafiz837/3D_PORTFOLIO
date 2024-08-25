import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto px-4 sm:px-6">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="text-center sm:text-left -mt-52 sm:mt-0 ">
          <h1 className={`${styles.heroHeadText} text-white text-3xl sm:text-5xl`}>
            Hi, I'm <span className="text-[#915eff]">Hafiz Umair</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-base sm:text-lg`}>
            A Web Developer, Developed 3D visuals, user <br /> interfaces and
            Web Applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[45px] rounded-3xl border-[3px] border-secondary flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 26, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
