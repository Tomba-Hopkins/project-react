import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

function App() {
  const [notSplash, setNotSplash] = useState(false);
  const { scrollYProgress } = useScroll();
  const days = [
    "Minggu Turu 😪",
    "Senin Malas😔",
    "Selasa Yoi 😁",
    "Rabu Lagi ☠️",
    "Kamis Manis 👍",
    "Jumat Sekedar Mengingatkan 🤖",
    "Sabtu Santuy 🦖",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "QuizMaker App",
      description: "You can make some quiz and get their score with this app",
      techStack: ["MongoDB", "Express", "React", "NodeJS"],
      link: "https://zingy-medovik-3d7c83.netlify.app/",
      repo: "https://github.com/zams-putra/quizmaker-app",
      img: "/img/me.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-slate-100 min-h-screen flex flex-col items-center gap-20 overflow-hidden">
      <AnimatePresence>
        {!notSplash && (
          <motion.main className="w-full flex h-screen absolute flex-col overflow-hidden">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: -500 }}
              className="w-full border-b border-b-green-400 bg-black h-1/2 flex flex-col items-center justify-end p-4"
            >
              <p className="bg-gradient-to-r from-slate-600 to-white bg-clip-text text-transparent text-xl md:text-2xl">
                Welcome to my portfolio
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              exit={{ y: 500 }}
              className="w-full border-t border-t-green4border-b-green-400 bg-black h-1/2 flex flex-col items-center justify-start p-4"
            >
              <p className="text-white absolute p-4 flex w-full justify-between top-0 text-xs md:xl">
                <span>{new Date().toLocaleTimeString()}</span>
                <span>{days[new Date().getDay()]}</span>
                <span>{new Date().getFullYear()}</span>
              </p>
              <p className="bg-gradient-to-r from-slate-600 to-white bg-clip-text text-transparent text-xl md:text-2xl">
                Wait.....
              </p>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      {notSplash && (
        <>
          <motion.header
            className="h-screen w-full p-4 flex flex-col gap-8 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: [1, 0.8, 1] }}
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
                className="w-14 h-14 cursor-pointer md:w-24 md:h-24 rounded-full border-2 border-yellow-400"
                src="/img/me.jpg"
                alt="me.jpg"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                whileHover={{ scale: 0.7 }}
                whileTap={{ scale: 0 }}
                transition={{ duration: 0.9, stiffness: 50 }}
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

          <motion.section
            className="h-screen w-full flex flex-col md:flex-row gap-4 justify-evenly items-center p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5 }}
          >
            <h1 className="md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent md:-rotate-90">
              About me
            </h1>
            <motion.div className="bg-black w-full md:w-1/4 border-2 border-green-400 rounded-lg h-1/3 md:h-1/2 flex flex-col gap-4 p-8 text-xs md:text-sm">
              <p>
                <span className="text-green-400">{`user@portfolio>`}</span> cat
                me.json
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
            <motion.div className="bg-black w-full md:w-1/4 border-2 border-red-500 rounded-lg md:h-1/2 h-1/3 flex flex-col gap-4 p-8 text-xs md:text-sm">
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

          <motion.section
            className="w-full min-h-screen flex flex-col justify-center items-center p-8 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
          >
            <h1 className="md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
              Tech Stack
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.8 }}
              className="bg-black/30 backdrop-blur-md z-10 w-full border-2 border-indigo-500 rounded-lg md:h-full h-1/2 flex flex-col p-4 text-xs md:text-sm"
            >
              <img
                src="/img/me.jpg"
                alt="me"
                className="absolute w-full h-full z-0 object-cover inset-0"
              />
              <div className="absolute z-10 inset-0 w-full h-full bg-black/80"></div>

              <div className="z-20 w-full h-1/4 text-xs md:text-base p-2 md:p-8 flex flex-col md:gap-4 gap-2">
                <p className="text-slate-200">
                  {"["}
                  <span className="text-yellow-400">user@</span>
                  <span className="text-purple-400">portfolio </span>
                  <span className="text-red-500">~/skills</span>
                  {"]"}$ ls /Web/Frontend
                </p>
                <div className="w-full flex gap-2 md:gap-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
                    className="text-orange-400"
                  >
                    HTML
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeIn" }}
                    className="text-blue-600"
                  >
                    CSS
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeIn" }}
                    className="text-yellow-400"
                  >
                    Javascript
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1, ease: "easeIn" }}
                    className="text-sky-300"
                  >
                    TailwindCSS
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2.5, delay: 1, ease: "easeIn" }}
                    className="text-sky-600"
                  >
                    React
                  </motion.p>
                </div>
              </div>
              <div className="z-20 w-full h-1/4 text-xs md:text-base p-2 md:p-8 flex flex-col md:gap-4 gap-2">
                <p className="text-slate-200">
                  {"["}
                  <span className="text-yellow-400">user@</span>
                  <span className="text-purple-400">portfolio </span>
                  <span className="text-red-500">~/skills</span>
                  {"]"}$ ls /Web/Backend
                </p>
                <div className="w-full flex gap-2 md:gap-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2, ease: "easeIn" }}
                    className="text-green-600"
                  >
                    NodeJS
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeIn" }}
                    className="text-gray-400"
                  >
                    Express
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeIn" }}
                    className="text-lime-500"
                  >
                    MongoDB
                  </motion.p>
                </div>
              </div>
              <div className="z-20 w-full h-1/4 text-xs md:text-base p-2 md:p-8 flex flex-col md:gap-4 gap-2">
                <p className="text-slate-200">
                  {"["}
                  <span className="text-yellow-400">user@</span>
                  <span className="text-purple-400">portfolio </span>
                  <span className="text-red-500">~/skills</span>
                  {"]"}$ ls /Web/Others
                </p>
                <div className="w-full flex gap-2 md:gap-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4, ease: "easeIn" }}
                    className="text-red-600"
                  >
                    Git
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4, ease: "easeIn" }}
                    className="text-blue-500"
                  >
                    Docker
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4, ease: "easeIn" }}
                    className="text-sky-300"
                  >
                    Burpsuite
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="w-full min-h-screen overflow-y-hidden flex flex-col  items-center gap-8"
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ y: 300, scale: 0 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
              My Project
            </motion.h1>
            <div className="w-full min-h-screen px-12 md:p-12  flex flex-col md:flex-row items-center flex-wrap gap-8 justify-between">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="w-full relative my-12 md:my-0 md:w-1/4 min-h-48 md:h-72 bg-white rounded-md flex flex-col justify-between content-between gap-2"
                >
                  <img
                    className="top-0 w-full rounded-md h-24 object-cover z-0"
                    src={project.img}
                    alt={project.title}
                  />
                  <motion.div
                    whileHover={{ opacity: 0 }}
                    className="absolute  top-0  w-full h-full object-cover z-10 bg-black/10 md:bg-black/40"
                  ></motion.div>

                  <div className="h-1/2 gap-2 items-end justify-between flex flex-col p-2 text-slate-900">
                    <p>{project.title}</p>
                    <small>{project.description}</small>
                    <div className="flex absolute top-0 right-5 z-50 items-end justify-end flex-wrap  gap-2">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        className="p-4 hover:bg-black duration-150 rounded-br-md rounded-bl-md bg-slate-900 text-slate-100"
                        target="_blank"
                        href={project.link}
                      >
                        see
                      </motion.a>
                    </div>
                    <div className="flex absolute top-0 left-5 z-50 items-end justify-end flex-wrap  gap-2">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        className="p-4 hover:bg-black duration-150 rounded-br-md rounded-bl-md bg-slate-900 text-slate-100"
                        target="_blank"
                        href={project.repo}
                      >
                        repo
                      </motion.a>
                    </div>
                    <div className="flex gap-2 text-xs flex-wrap-reverse">
                      {project.techStack.map((t, i) => (
                        <small
                          className="p-1 bg-slate-900 rounded-md text-white"
                          key={i}
                        >
                          #{t}
                        </small>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 pt-8">
            <motion.h1
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
              My Experience
            </motion.h1>
            <p>Zero experience 😔</p>
          </section>

          <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 pt-8">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
              We can be friends
            </motion.h1>
            <div className="w-full gap-8 items-center md:items-start min-h-screen flex p-8 flex-col md:flex-row flex-wrap">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://github.com/zams-putra"
                target="_blank"
              >
                Github
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://leetcode.com/u/Sebasers/"
                target="_blank"
              >
                LeetCode
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://www.codewars.com/users/AwikwokBas"
                target="_blank"
              >
                CodeWars
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://www.hackerrank.com/profile/AwikwokBas"
                target="_blank"
              >
                HackerRank
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://tryhackme.com/r/p/TombaHK"
                target="_blank"
              >
                TryHackMe
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://play.picoctf.org/users/deSebasers"
                target="_blank"
              >
                PicoCTF
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://medium.com/@sirsebasers"
                target="_blank"
              >
                Medium
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
                href="https://instagram.com/username.gw.itu.jir"
                target="_blank"
              >
                Instagram
              </motion.a>
            </div>
          </section>

          <section className="w-full h-screen flex justify-center items-center">
            <motion.div
              style={{
                scaleX: scrollYProgress,
              }}
              className="fixed top-0 w-full h-1 bg-green-400"
            ></motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
              Thank you :)
            </motion.h1>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
