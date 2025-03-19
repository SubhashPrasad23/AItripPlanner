import { motion } from "framer-motion";
import Tabs from "./Tabs";
import { Map } from "lucide-react";

 const ItineraryDisplay=({ response, scrollItineraryRef })=> {

    const { dailyItinerary, budgetBreakdownEstimate, Important_Note, ...overviewData } = response;


    return (
        <section ref={scrollItineraryRef} className="py-16 px-4 ">
            <div className=" mx-auto max-w-4xl ">
                <motion.div
                    className=" overflow-hidden "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="md:p-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Map className="h-6 w-6 text-purple-500" />
                            <h2 className="md:text-3xl text-2xl font-bold text-white">Your Travel Itinerary</h2>
                        </div>
                        <Tabs overviewData={overviewData} dailyItinerary={dailyItinerary} budgetBreakdownEstimate={budgetBreakdownEstimate} />
                       
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ItineraryDisplay