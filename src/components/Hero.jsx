import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import AnimatedDots from './AnimatedDots';

const Hero = () => {
  return (
    <div id='home' className='min-h-dvh bg-zinc-950 overflow-hidden relative '>
      {/* ========== Background grid lines ========== */}
      <div
        style={{
          backgroundImage: `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '27px 27px',
          position: 'absolute',
          inset: 0,
        }}
      />
      {/* ========== Background transparent gradient ========== */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(9,9,11,.3), rgba(9,9,11,0.95))`,
        }}
      />
      {/* ========== Background blurry thik line ========== */}
      <motion.div
        initial={{ x: '-100%', y: '-600%', rotate: '40deg', opacity: 1 }} // Initial position outside the viewport with opacity 0
        animate={{ x: '0', y: 0, opacity: 1 }} // Animation to bring it inside the viewport with opacity 1
        transition={{ duration: 1.5, delay: 1, ease: 'easeIn' }} // Animation duration and easing
        className=' absolute top-[220px] -left-[100px] w-[400px] md:w-[600px] xl:w-[1000px] h-[120px] rounded-full bg-white/5 blur-2xl '
      />

      {/* ========== hero title description animation ========== */}
      <div className='absolute w-full max-w-[1000px] px-4 md:pt-5 top-[6rem] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col md:flex-row items-center justify-center text-gray-200'>
        <div className=' z-30 flex flex-col gap-4 '>
          <motion.h2
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='text-xl md:text-2xl font-regular'
          >
            Hi👋, I Am Salman Farshi
          </motion.h2>
          <motion.h1
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              backgroundImage: `linear-gradient(to top right, #bfdbfe 0%, #818cf8 100%)`,
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className='text-5xl md:text-7xl font-bold'
          >
            Front-end Web Developer
          </motion.h1>
          <motion.h2
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-base max-w-[28rem] md:max-w-[35rem]'
          >
            I am passionate about crafting intuitive user interfaces. With
            expertise in HTML, CSS, and JavaScript, I transform concepts into
            interactive web experiences that engage and inspire.
          </motion.h2>
          <motion.a
            initial={{ y: '40px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              width: 'max-content',
            }}
            href='#contact'
            className=' group flex items-center gap-3 bg-gradient-to-tr from-blue-200 to-indigo-400 text-zinc-950 font-medium px-7 py-2 rounded-md  '
          >
            Contact me{' '}
            <FaArrowRight className='text-zinc-950 group-hover:-rotate-45 transition-all' />
          </motion.a>
        </div>

        {/* ========== Animated dot grid ========== */}

        <div className=' mt-[-2rem] md:mt-0 md:ml-[-10rem] '>
          <AnimatedDots width={30} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
