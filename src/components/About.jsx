import DottedGrid from './DottedGrid';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const dottedGradientColors = ['#f0fdfa', '#1d4ed8'];

  return (
    <section
      id='about'
      className=' bg-zinc-950 text-gray-200 min-h-[80vh] md:min-h-[70vh] relative overflow-hidden '
    >
      {/* ========== Dotted grid ========== */}
      <div className=' absolute -top-7 md:top-3 left-5 xl:left-[15rem]  opacity-30 z-30 '>
        <DottedGrid
          width={150}
          height={130}
          dotSize={5}
          spacing={15}
          gradientColors={dottedGradientColors}
        />
      </div>

      {/* ========== Dotted grid ========== */}
      <div className=' absolute -bottom-3 md:bottom-0 right-0 md:right-5 xl:right-[15rem] z-20 opacity-30 '>
        <DottedGrid
          width={400}
          height={100}
          dotSize={5}
          spacing={15}
          gradientColors={dottedGradientColors}
        />
      </div>

      {/* ========== Gradient rotating svg shape ========== */}
      <div className=' absolute opacity-30 -top-[70px] -right-[70px] hidden md:block '>
        <motion.svg
          width='500'
          height='500'
          viewBox='0 0 200 200'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 170,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {' '}
          <g clipPath='url(#clip0_105_480)'>
            {' '}
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M124.899 4.91713L105.8 85.9981L149.627 15.16C150.985 12.9661 154.033 12.6119 155.857 14.4361L185.564 44.1427C187.388 45.9669 187.034 49.0153 184.84 50.3727L114.002 94.2004L195.083 75.101C197.594 74.5095 200 76.4147 200 78.9945V121.006C200 123.586 197.594 125.491 195.083 124.899L114.002 105.8L184.84 149.628C187.034 150.985 187.388 154.033 185.564 155.858L155.857 185.564C154.033 187.388 150.985 187.034 149.627 184.84L105.8 114.002L124.899 195.083C125.491 197.594 123.585 200 121.006 200H78.9943C76.4145 200 74.5094 197.594 75.1009 195.083L94.2003 114.002L50.3726 184.84C49.0153 187.034 45.9668 187.388 44.1426 185.564L14.4361 155.857C12.6119 154.033 12.9661 150.985 15.16 149.627L85.9975 105.8L4.91714 124.899C2.40606 125.491 0 123.586 0 121.006V78.9944C1.94914e-06 76.4146 2.40605 74.5095 4.91714 75.101L85.998 94.2003L15.16 50.3728C12.9661 49.0154 12.6119 45.9669 14.4361 44.1427L44.1426 14.4362C45.9668 12.612 49.0153 12.9662 50.3726 15.1601L94.2003 85.9983L75.1009 4.91714C74.5094 2.40606 76.4145 3.89828e-06 78.9943 3.67275e-06L121.006 0C123.586 0 125.491 2.40605 124.899 4.91713ZM100 111.429C106.312 111.429 111.429 106.312 111.429 100C111.429 93.6882 106.312 88.5714 100 88.5714C93.6882 88.5714 88.5714 93.6882 88.5714 100C88.5714 106.312 93.6882 111.429 100 111.429Z'
              fill='url(#paint0_linear_105_480)'
            />{' '}
          </g>{' '}
          <defs>
            {' '}
            <linearGradient
              id='paint0_linear_105_480'
              x1='14'
              y1='26'
              x2='179'
              y2='179.5'
              gradientUnits='userSpaceOnUse'
            >
              {' '}
              <stop stopColor='#115e59' />{' '}
              <stop offset='1' stopColor='#1f2937' />{' '}
            </linearGradient>{' '}
            <clipPath id='clip0_105_480'>
              {' '}
              <rect width='200' height='200' fill='white' />{' '}
            </clipPath>{' '}
          </defs>{' '}
        </motion.svg>
      </div>

      {/* ========== Main content ========== */}
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
          <p className=' max-w-[45rem] text-[.96rem] md:text-[1.05rem] font-light '>
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
