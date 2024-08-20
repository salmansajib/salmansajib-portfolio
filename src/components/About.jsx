import DottedGrid from "./DottedGrid";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const dottedGradientColors = ["#c4b5fd", "#c4b5fd"];

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-svh overflow-hidden bg-zinc-950 py-8 text-gray-200 md:min-h-[70vh]"
    >
      {/* ========== Dotted grid ========== */}
      <div className="absolute -top-7 left-5 z-30 opacity-50 md:top-3 xl:left-[15rem]">
        <DottedGrid
          width={150}
          height={130}
          dotSize={5}
          spacing={15}
          gradientColors={dottedGradientColors}
        />
      </div>

      {/* ========== Dotted grid ========== */}
      <div className="absolute -bottom-3 right-0 z-20 opacity-50 md:bottom-0 md:right-5 xl:right-[15rem]">
        <DottedGrid
          width={400}
          height={100}
          dotSize={5}
          spacing={15}
          gradientColors={dottedGradientColors}
        />
      </div>

      {/* ========== Main content ========== */}
      <article className="absolute left-1/2 top-1/2 z-40 mx-auto w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-3">
        <motion.div
          variants={container}
          initial="hidden"
          // animate="visible"
          whileInView="visible"
          viewport={{
            margin: "-300px",
            once: true,
          }}
          className="flex flex-col gap-5"
        >
          <motion.h2
            variants={item}
            style={{
              width: "max-content",
            }}
            className="gradient-header mb-4 uppercase"
          >
            About
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-[45rem] text-[.96rem] font-light md:text-[1.05rem]"
          >
            Driven by a passion for creating visually engaging and user-friendly
            experiences, I embarked on a journey of self-discovery in the world
            of front-end development. Through countless online tutorials, coding
            challenges, and personal projects, I have honed my skills in{" "}
            <span className="font-medium text-blue-300">HTML</span>,{" "}
            <span className="font-medium text-blue-300">CSS</span>, and{" "}
            <span className="font-medium text-blue-300">JavaSeript</span>. While
            my focus lies on the technical aspects that bring websites to life,
            I also possess a keen eye for{" "}
            <span className="font-medium text-blue-300">UI design</span>{" "}
            principles. This allows me to bridge the gap between functionality
            and aesthetics, ensuring every website I build is not only
            functional but also a pleasure to interact with.{" "}
            <span className="font-medium text-blue-300">ReactJS</span> is my
            JavaScript library of choice due to its component-based architecture
            and performance optimizations, but I am always open to learning and
            adapting to other libraries and frameworks as needed.
          </motion.p>
          <motion.a
            variants={item}
            href="#projects"
            style={{
              width: "max-content",
            }}
            className="group mt-3 flex items-center gap-3 rounded-[.25em] bg-gradient-to-tr from-blue-200 to-indigo-400 px-6 py-2 font-medium text-zinc-950 transition-shadow hover:shadow-lg hover:shadow-indigo-500/35"
          >
            Projects
            <FaArrowRight className="text-zinc-950 transition-all group-hover:-rotate-45" />
          </motion.a>
        </motion.div>
      </article>
    </section>
  );
};

export default About;
