import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

function App() {
  const [notSplash, setNotSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-slate-100 min-h-screen flex flex-col items-center">
      <AnimatePresence>
        {!notSplash && (
          <motion.main className="w-full flex h-screen absolute flex-col overflow-hidden">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: -500 }}
              className="w-full border-b border-b-slate-50 bg-gray-800 h-1/2 flex flex-col items-center justify-end"
            >
              <p className="text-green-400 text-xl md:text-4xl">
                Welcome to my portfolio
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: 500 }}
              className="w-full border-t border-t-slate-50 bg-gray-800 h-1/2 flex flex-col items-center justify-start"
            >
              <p className="text-green-400 text-xl md:text-4xl">Made by me</p>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      {notSplash && (
        <>
          <motion.header
            className="h-screen w-full p-4 flex flex-col gap-8 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
          >
            <div className="flex items-center justify-center gap-8">
              <motion.p
                className="md:text-5xl text-2xl"
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, stiffness: 50, delay: 1.5 }}
              >
                Hello, i am smith
              </motion.p>
              <motion.img
                className="w-14 h-14 md:w-24 md:h-24 rounded-full border-2 border-yellow-400"
                src="/img/me.jpg"
                alt="me.jpg"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.9, stiffness: 50, delay: 1.5 }}
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <motion.p
                className="text-sm md:text-2xl flex gap-4"
                transition={{ delay: 1.5 }}
              >
                I am a
              </motion.p>
              <span className="text-green-400 text-sm md:text-2xl">
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

          <motion.h1
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            About Me
          </motion.h1>
          <motion.section
            className="h-screen w-full flex flex-col md:flex-row gap-4 justify-evenly items-center p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5 }}
          >
            <motion.div className="bg-black w-full md:w-1/4 border-2 border-green-400 rounded-lg h-1/4 md:h-1/2 flex flex-col gap-4 p-8 text-xs md:text-sm">
              <p>
                <span className="text-green-400">{`>`}</span> cat me.json
              </p>
              <pre className="text-white">
                <TypewriterComponent
                  options={{
                    strings: [
                      `{
  name: 'smith',
  age: 'age < 25',
  isMarried: false,
  hobbies: ['Game', 'Music', 'Gym']
}`,
                    ],
                    autoStart: true,
                    cursor: "_",
                    loop: true,
                  }}
                />
              </pre>
            </motion.div>
            <motion.div className="bg-black w-full md:w-1/4 border-2 border-red-500 rounded-lg md:h-1/2 h-1/4 flex flex-col gap-4 p-8 text-xs md:text-sm">
              <p>I{"'"}am happy with :</p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="text-red-500">{`>`}</span> Competitive
                Programming
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <span className="text-red-500">{`>`}</span> Web Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <span className="text-red-500">{`>`}</span> Red team{" "}
                {"[Web Vuln, CTF]"}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <span className="text-red-500">{`>`}</span> Blue team{" "}
                {"[Log analyst, SIEM]"}
              </motion.p>
            </motion.div>
          </motion.section>
        </>
      )}
    </div>
  );
}

export default App;
