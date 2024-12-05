import { motion } from "motion/react";

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col items-center">
      <motion.header
        className="h-screen w-full p-4 flex gap-8 justify-center items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, stiffness: 50 }}
      >
        <motion.p className="text-5xl">Hello, im Smith i am a</motion.p>
        <img
          className="w-24 h-24 rounded-full"
          src="../public/img/me.jpg"
          alt="me.jpg"
        />
      </motion.header>
    </div>
  );
}

export default App;
