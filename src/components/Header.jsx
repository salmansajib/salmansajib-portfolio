import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { id: nanoid(), name: "Home", href: "#home" },
  { id: nanoid(), name: "About", href: "#about" },
  { id: nanoid(), name: "Skills", href: "#skills" },
  { id: nanoid(), name: "Projects", href: "#projects" },
  { id: nanoid(), name: "Contact", href: "#contact" },
];

const staggerVariant = {
  hidden: {
    y: "20px",
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
    <header className="fixed w-full px-2">
      <section className="mx-auto flex max-w-[1200px] items-center justify-between rounded-md bg-gray-100/10 px-4 py-1 text-gray-50 shadow-md backdrop-blur-[15px]">
        <h1 className="logo cursor-not-allowed font-dancingScript text-[1.4rem] font-bold text-gray-50">
          Salman
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="font-regular rounded-full px-3 py-[2px] font-inter text-[.92rem] text-gray-300 transition-all hover:text-gray-50 focus:text-gray-50 active:text-gray-50"
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
          className="cursor-pointer rounded-md px-2 py-1 hover:bg-gray-50/20 md:hidden"
        >
          <RxHamburgerMenu className="text-[1.5rem] text-gray-50" />
        </button>
        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className="text-[1.3rem] text-gray-50"
            href="https://github.com/Salman-sajib"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.11,
            }}
            className="text-[1.3rem] text-gray-50"
            href="https://www.linkedin.com/in/salman-sajib-b2468b141/"
            target="_blank"
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
              x: "-100%",
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
              x: "100%",
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            style={{
              backdropFilter: "blur(10px)",
            }}
            className="fixed left-0 top-0 z-50 flex min-h-dvh w-full flex-col items-center bg-zinc-950/90 p-3 font-inter"
          >
            <div className="flex w-full justify-end">
              <button
                onClick={handleCloseNav}
                className="flex cursor-pointer items-center gap-1 rounded-full bg-gray-50/15 px-3 py-1 text-sm text-gray-50"
              >
                Close <IoClose className="text-lg" />
              </button>
            </div>

            <nav className="mt-[8rem]">
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    variants={staggerVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                    }}
                  >
                    <a
                      onClick={() => setIsOpen(false)}
                      className="font-regular my-3 block w-[85vw] rounded-md bg-gray-50/15 py-5 text-center text-xl text-gray-300 hover:text-gray-50"
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
