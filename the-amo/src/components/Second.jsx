import { motion } from "motion/react";


export function Second() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full">
            <h1>Like we us to duuuu uuu</h1>
        </motion.div>
    )
}