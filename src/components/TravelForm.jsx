import { motion } from "framer-motion";
import { interestOptions } from "../utils/mockData";
import Input from "./Input";
import { Loader2, Sparkles } from "lucide-react";

const TravelForm = ({ scrollRef, loading, onSubmit, formData, setFormData, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },

    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <section ref={scrollRef} className="py-16 px-4 ">
            <div className=" mx-auto max-w-4xl">
                <motion.div
                    className="bg-[#1a1a24] rounded-3xl shadow-[0_0_30px_rgba(147,51,234,0.15)] overflow-hidden border border-purple-900/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="p-5 md:p-8">
                        <motion.form
                            onSubmit={onSubmit}
                            variants={formVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-3">
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Traveling from</label>
                                    <Input
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        placeholder="Your starting point"
                                        error={errors.source}
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                                    <Input
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        placeholder="Where do you want to go?"
                                        error={errors.destination}
                                    />
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Departure Date</label>
                                    <input
                                        name="departDate"
                                        value={formData.departDate}
                                        onChange={handleChange}
                                        type="date"
                                        min={today}
                                        error={errors.departDate}
                                        className="w-full px-4 md:py-3 py-2 rounded-lg bg-[#252533] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    {errors.departDate && <p className="text-red-500 text-xs mt-1">{errors.departDate}</p>}
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Return Date</label>
                                    <input
                                        name="returnDate"
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        type="date"
                                        min={today}
                                        error={errors.returnDate}
                                        className="w-full px-4 md:py-3 py-2 rounded-lg bg-[#252533] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate}</p>}
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Number of Travelers</label>
                                    <Input
                                        name="travelers"
                                        value={formData.travelers}
                                        onChange={handleChange}
                                        type="number"
                                        min="1"
                                        error={errors.travelers}
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Mode of Transport</label>
                                    <div className="relative">
                                        <select
                                            name="mode"
                                            value={formData.mode || "none"}
                                            onChange={handleChange}
                                            className="w-full px-4 md:py-3 py-2 bg-[#252533] border border-purple-900/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white appearance-none"
                                        >
                                            <option value="none">Suggest the best option</option>
                                            <option value="flight">Flight</option>
                                            <option value="train">Train</option>
                                        </select>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="w-full">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Interests</label>
                                <motion.select
                                    value={formData.interests}
                                    onChange={handleChange}
                                    name="interests"
                                    className="w-full px-4 md:py-3 py-2 rounded-lg bg-[#252533] text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="" disabled>Select an interest</option>
                                    {interestOptions.map((interest) => (
                                        <option key={interest} value={interest} className="bg-[#252533] text-gray-300">
                                            {interest}
                                        </option>
                                    ))}
                                </motion.select>
                                {errors.interests && <p className="text-red-500 text-xs mt-1">{errors.interests}</p>}
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-medium text-lg shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span>Generating your plan...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="h-5 w-5" />
                                            <span>Generate AI Travel Plan</span>
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TravelForm;
