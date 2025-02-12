import { motion } from "motion/react";


export function First() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="overflow-x-hidden flex flex-col gap-4">
            <h1 className="text-slate-100 py-10 my-10">Welcome again <motion.span className="font-extrabold text-pink-600" initial={{ marginLeft: 50 }} animate={{ marginLeft: 0 }} transition={{ duration: 1 }} >My Love</motion.span> </h1>


            <motion.p className="my-10" initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.7, ease: 'easeIn' }}>I have some game for you <span className="text-pink-200">sweetie</span> </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="my-10">
                <motion.p animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity, ease: 'backIn' }}>Decode this base64 first okay</motion.p>

                <motion.p className="font-mono text-slate-50 text-xs my-4 p-2 bg-pink-500" animate={{ borderRadius: [40, 0, 40] }} transition={{ repeat: Infinity, duration: 5, ease: 'circInOut' }}>YmVhdXRpZnVs</motion.p>
            </motion.div>

            <motion.div className="w-full my-10 flex gap-2 p-2">
                <input className="bg-slate-300 p-2 text-slate-900" type="text" />
                <button className="bg-pink-500 text-slate-100 p-2">submit</button>
            </motion.div>



        </motion.div>
    )
}