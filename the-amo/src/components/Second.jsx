import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
export function Second({ submitHandler, correct }) {

    const [type, SetType] = useState("")


    const inputHandler = (e) => {
        SetType(e.target.value)
    }


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="overflow-x-hidden flex flex-col gap-4">
            <h1 className="text-pink-200 py-10 my-10">Almost burn</h1>


            <AnimatePresence mode="wait">
                {!correct ? (

                    <motion.div key="game" exit={{ opacity: 0, scale: 0 }}>
                        <motion.p className="my-10" initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.7, ease: 'easeIn' }}>Make it correct <span className="text-pink-200">Honey</span> </motion.p>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="my-10">
                            <motion.p animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, ease: 'backIn' }}>Now is Rot13</motion.p>

                            <motion.p className="font-mono text-slate-50 text-xs my-4 p-2 bg-pink-500" animate={{ borderRadius: [40, 0, 40] }} transition={{ repeat: Infinity, duration: 5, ease: 'circInOut' }}>xvaq</motion.p>
                        </motion.div>

                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>Maybe a hint can help <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank" className="p-1 py-0 bg-pink-500 text-slate-900">you</a></motion.p>

                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.7 }} className=" my-10 overflow-hidden flex gap-2 p-2">
                            <input value={type} onChange={inputHandler} placeholder="Submit in here" className="bg-slate-300 p-2 text-slate-900" type="text" />
                            <button onClick={submitHandler(type)} className="bg-pink-500 text-slate-100 p-2">submit</button>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div key="correct" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, ease: 'easeIn', duration: 1 }}>
                        <p className="text-green-400 my-4">Nice one, goodgirl.</p>
                        <small className="text-xs">Base64 is a group of binary-to-text encoding schemes that transforms binary data into a sequence of printable characters, limited to a set of 64 unique characters</small>
                    </motion.div>
                )}
            </AnimatePresence>




        </motion.div>
    )
}