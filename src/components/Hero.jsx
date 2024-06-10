import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import AnimatedDots from "./AnimatedDots";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-zinc-950"
    >
      {/* ========== Background grid lines ========== */}
      <div
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(243, 244, 246, 0.14) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(243, 244, 246, 0.14) 1px, transparent 1px)`,
          backgroundSize: "27px 27px",
          position: "absolute",
          inset: 0,
        }}
      />
      {/* ========== Background transparent gradient ========== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(9,9,11,.3), rgba(9,9,11,0.95))`,
        }}
      />
      {/* ========== Background blurry thik line ========== */}
      <motion.div
        initial={{ x: "-100%", y: "-600%", rotate: "40deg", opacity: 1 }}
        animate={{ x: "0", y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeIn" }}
        className="absolute -left-[100px] top-[220px] h-[120px] w-[400px] rounded-full bg-gray-200/5 blur-2xl md:w-[600px] xl:w-[1000px]"
      />

      {/* ========== hero title description animated dot grid ========== */}
      <div className="absolute top-[5rem] flex w-full max-w-[1000px] flex-col items-center justify-center px-3 text-gray-200 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:pt-8">
        <div className="z-10 flex flex-col gap-6">
          <motion.h2
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-regular text-xl md:text-2xl"
          >
            Hi👋, I Am Salman Farshi Sajib
          </motion.h2>
          <motion.h1
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              backgroundImage: `linear-gradient(to right, #bfdbfe 10%,#86efac 60%, #a5b4fc 90%)`,
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-5xl font-bold md:text-7xl"
          >
            Front-end Web Developer
          </motion.h1>
          <motion.h2
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-[28rem] text-[.95rem] font-light md:max-w-[35rem] md:text-[1.07rem]"
          >
            I am passionate about crafting intuitive user interfaces. With
            expertise in HTML, CSS, and JavaScript, I transform concepts into
            interactive web experiences that engage and inspire.
          </motion.h2>
          <motion.a
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              width: "max-content",
            }}
            href="#contact"
            className="group mt-3 flex items-center gap-3 rounded-[.25em] bg-gradient-to-tr from-blue-200 to-indigo-400 px-6 py-2 font-medium text-zinc-950"
          >
            Contact me{" "}
            <FaArrowRight className="text-zinc-950 transition-all group-hover:-rotate-45" />
          </motion.a>
        </div>

        {/* ========== Animated dot grid ========== */}
        <div className="mt-[-2rem] md:ml-[-10rem] md:mt-0">
          <AnimatedDots width={30} height={25} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
