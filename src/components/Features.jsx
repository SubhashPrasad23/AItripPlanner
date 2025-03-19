import { motion } from "framer-motion"
import {features} from "../utils/mockData"


const  Features=()=> {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <section className="mx-auto w-4/5 py-16 px-4 bg-[#0f0f13]">
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 "
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a1a24] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] text-center transition-all duration-500 border border-purple-900/30 group  flex flex-col items-center justify-center"
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-500 mb-6 group-hover:text-purple-400 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="lg:text-xl sm:text-lg text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Features