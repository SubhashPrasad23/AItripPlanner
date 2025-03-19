import { motion } from "framer-motion";

const Input = ({ name, value, onChange, placeholder, error, type = "text" }) => {
    return (
        <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{
                type: "keyframes",
                duration: 0.4,
                times: [0, 0.25, 0.5, 0.75, 1],
            }}
        >
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full  px-4 md:py-3 py-2 bg-[#252533] border border-purple-900/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-white`}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        </motion.div>
    );
};

export default Input;