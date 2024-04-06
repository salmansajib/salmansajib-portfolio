import DottedGrid from './DottedGrid';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id='about'
      className=' bg-zinc-950 text-gray-200 min-h-[70vh] relative overflow-hidden '
    >
      {/* dark overlay */}
      {/* <div
        style={{
          backdropFilter: 'blur(40px)',
        }}
        className=' absolute w-full h-full top-0 left-0 bg-zinc-900/10 z-20'
      /> */}

      {/* Dotted grid */}
      <div className=' absolute -top-7 md:top-3 left-1 xl:left-[15rem]  opacity-30 z-30 '>
        <DottedGrid
          width={300}
          height={130}
          dotSize={5}
          spacing={15}
          gradientColors={['#a8edea', '#fed6e3']}
        />
      </div>
      {/* Dotted grid */}
      <div className=' absolute -bottom-3 md:bottom-0 right-0 md:right-5 xl:right-[15rem] z-20 opacity-30 '>
        <DottedGrid
          width={400}
          height={100}
          dotSize={5}
          spacing={15}
          gradientColors={['#a8edea', '#fed6e3']}
        />
      </div>

      <article className=' max-w-[1000px] mx-auto px-3 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 '>
        <div className=' flex flex-col gap-5 '>
          <h2
            style={{
              backgroundImage: `linear-gradient(to top right, #bfdbfe 0%, #818cf8 100%)`,
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className=' text-5xl md:text-7xl font-semibold  '
          >
            About Me
          </h2>
          <p className=' max-w-[45rem] text-[.95rem] md:text-[1.07rem] font-light '>
            Driven by a passion for creating visually engaging and user-friendly
            experiences, I embarked on a journey of self-discovery in the world
            of front-end development. Through countless online tutorials, coding
            challenges, and personal projects, I have honed my skills in{' '}
            <span className=' font-medium text-blue-300 '>HTML</span>,{' '}
            <span className=' font-medium text-blue-300 '>CSS</span>, and{' '}
            <span className=' font-medium text-blue-300 '>JavaSeript</span>.
            While my focus lies on the technical aspects that bring websites to
            life, I also possess a keen eye for{' '}
            <span className=' font-medium text-blue-300 '>UI design</span>{' '}
            principles. This allows me to bridge the gap between functionality
            and aesthetics, ensuring every website I build is not only
            functional but also a pleasure to interact with.{' '}
            <span className=' font-medium text-blue-300 '>ReactJS</span> is my
            JavaScript library of choice due to its component-based architecture
            and performance optimizations, but I am always open to learning and
            adapting to other libraries and frameworks as needed.
          </p>
          <motion.a
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href='#projects'
            style={{
              width: 'max-content',
            }}
            className='group flex items-center gap-3 bg-gradient-to-tr from-blue-200 to-indigo-400 text-zinc-950 font-medium px-7 py-2 rounded-[.25em] '
          >
            Projects
            <FaArrowRight className='text-zinc-950 group-hover:-rotate-45 transition-all' />
          </motion.a>
        </div>
      </article>
    </section>
  );
};

export default About;
