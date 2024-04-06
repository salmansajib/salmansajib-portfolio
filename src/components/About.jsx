import DottedGrid from './DottedGrid';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id='about'
      className=' bg-zinc-950 text-gray-200 py-[7rem] relative overflow-hidden '
    >
      <div className=' absolute top-3 left-5 xl:left-[15rem] z-0 opacity-30 '>
        <DottedGrid
          width={300}
          height={100}
          dotSize={5}
          spacing={15}
          gradientColors={['#a8edea', '#fed6e3']}
        />
      </div>
      <div className=' absolute bottom-0 right-5 xl:right-[15rem] z-0 opacity-30 '>
        <DottedGrid
          width={400}
          height={100}
          dotSize={5}
          spacing={15}
          gradientColors={['#a8edea', '#fed6e3']}
        />
      </div>

      <article className=' max-w-[1000px] mx-auto px-2 flex flex-col gap-5  '>
        <h2
          style={{
            backgroundImage: `linear-gradient(to top right, #bfdbfe 0%, #818cf8 100%)`,
            backgroundClip: 'text',
            color: 'transparent',
          }}
          className=' text-5xl md:text-6xl font-semibold  '
        >
          About Me
        </h2>
        <p className=' text-[.95rem] md:text-[1rem] max-w-[47rem] '>
          Driven by a passion for creating visually engaging and user-friendly
          experiences, I embarked on a journey of self-discovery in the world of
          front-end development. Through countless online tutorials, coding
          challenges, and personal projects, I have honed my skills in{' '}
          <span className=' font-bold text-indigo-300 '>HTML</span>,{' '}
          <span className=' font-bold text-indigo-300 '>CSS</span>, and{' '}
          <span className=' font-bold text-indigo-300 '>JavaSeript</span>. While
          my focus lies on the technical aspects that bring websites to life, I
          also possess a keen eye for{' '}
          <span className=' font-bold text-indigo-300 '>UI design</span>{' '}
          principles. This allows me to bridge the gap between functionality and
          aesthetics, ensuring every website I build is not only functional but
          also a pleasure to interact with.{' '}
          <span className=' font-bold text-indigo-300 '>ReactJS</span> is my
          JavaScript library of choice due to its component-based architecture
          and performance optimizations, but I am always open to learning and
          adapting to other libraries and frameworks as needed.
        </p>
        <a
          href='#projects'
          style={{
            width: 'max-content',
          }}
          className='group flex items-center gap-3 bg-gradient-to-tr from-blue-200 to-indigo-400 text-zinc-950 font-medium px-7 py-2 rounded-[.25em] '
        >
          Projects
          <FaArrowRight className='text-zinc-950 group-hover:-rotate-45 transition-all' />
        </a>
      </article>
    </section>
  );
};

export default About;
