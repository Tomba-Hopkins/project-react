import { motion } from "motion/react";


export function First() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full h-full">
            <h1 className="text-slate-100 py-10">Welcome again <motion.span className="font-extrabold text-pink-600" initial={{ marginLeft: 50 }} animate={{ marginLeft: 0 }} transition={{ duration: 1 }} >My Love</motion.span> </h1>
        </motion.div>
    )
}