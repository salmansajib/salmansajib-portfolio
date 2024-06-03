import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const navLinks = [
  { id: nanoid(), name: 'Home', href: '#home' },
  { id: nanoid(), name: 'About', href: '#about' },
  { id: nanoid(), name: 'Skills', href: '#skills' },
  { id: nanoid(), name: 'Projects', href: '#projects' },
  { id: nanoid(), name: 'Contact', href: '#contact' },
];

const staggerVariant = {
  hidden: {
    y: '20px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(true);
  };
  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <header className='px-2 w-full fixed'>
      <section className='max-w-[1200px] mx-auto bg-gray-100/10 shadow-md rounded-md text-gray-50 flex items-center justify-between px-4 py-1 backdrop-blur-[10px]'>
        <h1 className='logo text-[1.4rem] text-gray-50 font-bold font-dancingScript cursor-not-allowed'>
          Salman
        </h1>
        <nav className=' hidden md:block '>
          <ul className='flex items-center gap-9'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className='text-[.92rem] text-gray-300 font-inter font-regular px-3 py-[2px] rounded-full  hover:text-gray-50  focus:text-gray-50  active:text-gray-50 transition-all'
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleOpenNav}
          className=' md:hidden cursor-pointer px-2 py-1 rounded-md hover:bg-gray-50/20 '
        >
          <RxHamburgerMenu className=' text-[1.5rem] text-gray-50  ' />
        </button>
        <div className='flex items-center gap-2'>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-[1.3rem] text-gray-50'
            href='https://github.com/Salman-sajib'
            target='_blank'
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className='text-[1.3rem] text-gray-50'
            href='https://www.linkedin.com/in/salman-sajib-b2468b141/'
            target='_blank'
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </section>

      {/* ========== Mobile navigation ========== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              x: '-100%',
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              x: '100%',
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            style={{
              backdropFilter: 'blur(10px)',
            }}
            className=' w-full min-h-dvh fixed top-0 left-0 font-inter  bg-zinc-950/90 z-50 p-3 flex flex-col items-center '
          >
            <div className='w-full flex justify-end'>
              <button
                onClick={handleCloseNav}
                className=' text-sm text-gray-50 bg-gray-50/15  cursor-pointer px-3 py-1 rounded-full flex items-center gap-1'
              >
                Close <IoClose className='text-lg' />
              </button>
            </div>

            <nav className=' mt-[8rem] '>
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    variants={staggerVariant}
                    initial='hidden'
                    animate='visible'
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                    }}
                  >
                    <a
                      onClick={() => setIsOpen(false)}
                      className=' w-[85vw] block text-xl text-gray-300 font-regular hover:text-gray-50 bg-gray-50/15 rounded-md py-5 my-3 text-center '
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
