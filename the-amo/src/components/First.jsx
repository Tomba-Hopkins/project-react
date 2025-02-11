import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
export function First({ pageHandler }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-screen h-screen bg-slate-600 text-slate-200">
            <h1>Welcome again</h1>
            <button onClick={pageHandler}>Switch</button>
        </motion.div>
    )
}