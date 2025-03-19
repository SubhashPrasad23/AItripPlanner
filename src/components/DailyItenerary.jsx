import React from 'react'
import Card from './Card'
import { motion } from "framer-motion";
import { Calendar, Clock } from 'lucide-react';

const DailyItenerary = (dailyItinerary) => {
    console.log(dailyItinerary)
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }
  return (
      <div className="space-y-6">
              <motion.div
                  key="daily"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
              >
              {dailyItinerary?.dailyItinerary.map((day, index) => (
                      <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-[#252533] rounded-xl p-3 border border-purple-900/20"
                      >
                          <h3 className="md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-purple-400" />
                              {day.day}
                          </h3>

                          <div className="space-y-4">
                              {day.activities.map((activity, actIndex) => (
                                  <div key={actIndex} className="flex items-start gap-4">
                                      <div className="flex-shrink-0 w-24 text-purple-300 font-medium flex items-center gap-1">
                                          {activity.time}
                                      </div>
                                      <div className="flex-grow">
                                          <p className="text-gray-200">{activity.description}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </motion.div>
                  ))}
              </motion.div>
      
      </div>
  )
}

export default DailyItenerary