import { motion } from "framer-motion"
import { Plane, MapPin, Sparkles } from "lucide-react"

const  Hero=({ onClick }) =>{
    

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0f13]">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center justify-center mb-6">
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    filter: [
                                        "drop-shadow(0 0 8px rgba(147, 51, 234, 0.7))",
                                        "drop-shadow(0 0 16px rgba(147, 51, 234, 0.5))",
                                        "drop-shadow(0 0 8px rgba(147, 51, 234, 0.7))",
                                    ],
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                    filter: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                                }}
                                className="relative"
                            >
                                <Plane className="h-16 w-16 text-purple-500" />
                            </motion.div>
                        </div>

                        <motion.h1
                            className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                             AI TRIP PLANNER
                        </motion.h1>

                        <motion.p
                            className="text-sm md:text-lg text-gray-300 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Your AI-powered travel companion for unforgettable journeys
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            <button onClick={onClick}className="px-8 md:py-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium text-lg shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] transition-all duration-300 flex items-center gap-2 mx-auto group  cursor-pointer">
                                <Sparkles className="h-5 w-5 group-hover:animate-pulse" />
                                <span>Plan Your Trip</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/4"
                animate={{
                    y: [0, -15, 0],
                    filter: [
                        "drop-shadow(0 0 0px rgba(239, 68, 68, 0))",
                        "drop-shadow(0 0 10px rgba(239, 68, 68, 0.7))",
                        "drop-shadow(0 0 0px rgba(239, 68, 68, 0))",
                    ],
                }}
                transition={{
                    y: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                    filter: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
            >
                <MapPin className="h-8 w-8 text-red-500" />
            </motion.div>

            <motion.div
                className="absolute top-1/4 right-1/4"
                animate={{
                    y: [0, -20, 0],
                    filter: [
                        "drop-shadow(0 0 0px rgba(34, 197, 94, 0))",
                        "drop-shadow(0 0 10px rgba(34, 197, 94, 0.7))",
                        "drop-shadow(0 0 0px rgba(34, 197, 94, 0))",
                    ],
                }}
                transition={{
                    y: { duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 },
                    filter: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 },
                }}
            >
                <MapPin className="h-10 w-10 text-green-500" />
            </motion.div>
        </section>
    )
}

export default Hero