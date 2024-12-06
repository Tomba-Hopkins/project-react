import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

function App() {
  const [notSplash, setNotSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col items-center">
      <AnimatePresence>
        {!notSplash && (
          <motion.main className="w-full flex h-screen absolute flex-col overflow-hidden">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: -500 }}
              className="w-full bg-slate-100 h-1/2 flex flex-col items-center justify-end"
            >
              <p className="text-green-400 text-4xl">Welcome to my portfolio</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: 500 }}
              className="w-full bg-slate-100 h-1/2 flex flex-col items-center justify-start"
            >
              <p className="text-yellow-400">Made by me</p>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      {notSplash && (
        <motion.header className="h-screen w-full p-4 flex flex-col gap-8 justify-center items-center">
          <div className="flex items-center justify-center gap-8">
            <motion.p
              className="text-5xl"
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, stiffness: 50 }}
            >
              Hello, i am smith
            </motion.p>
            <motion.img
              className="w-24 h-24 rounded-full border-2 border-yellow-400"
              src="/img/me.jpg"
              alt="me.jpg"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              transition={{ duration: 0.9, stiffness: 50 }}
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <motion.p className="text-2xl flex gap-4">I am a</motion.p>
            <span className="text-green-400 text-2xl">
              <TypewriterComponent
                options={{
                  strings: [
                    "Web developer",
                    "Cyber Security Enthusiast",
                    "Graphic Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                }}
              />
            </span>
          </div>
        </motion.header>
      )}
    </div>
  );
}

export default App;
