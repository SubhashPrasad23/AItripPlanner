import React, { useState } from 'react'
import Overview from './Overview';
import DailyItenerary from './DailyItenerary';
import Budget from './Budget';
import { motion } from "framer-motion";

const Tabs = ({ budgetBreakdownEstimate, overviewData, dailyItinerary }) => {
    const [activeIndexTab, setActiveIndexTab] = useState(0);

    const tabVariants = {
        inactive: { opacity: 0.7 },
        active: { opacity: 1 },
    };
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };
    const tabs = [{ name: "Overview", compo: <Overview overviewData={overviewData} /> }, {
        name: "Daily Itinerary", compo: <DailyItenerary dailyItinerary={dailyItinerary} />
    }, { name: "Budget", compo: <Budget budgetBreakdownEstimate={budgetBreakdownEstimate} /> }]
    const activeTab = tabs[activeIndexTab].compo

    return (
        <div className=" border-purple-900/30 pb-4">
            {tabs.map((tab, index) => (<motion.button
                variants={tabVariants}
                key={index}
                onClick={() => setActiveIndexTab(index)}
                className={`w-2/6 mb-8 border-b hover:rounded-t-lg md:py-4 py-2.5 text-sm font-medium transition-all duration-300 ${activeIndexTab === index
                    ? "bg-purple-600 rounded-t-lg text-white shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                    : " text-gray-300 hover:bg-[#2a2a3a]"
                    }`}
            >
                {tab.name}
            </motion.button>))}

            <motion.div variants={contentVariants} initial="hidden" animate="visible">
                {activeTab}
            </motion.div>
        </div>
    )
}

export default Tabs