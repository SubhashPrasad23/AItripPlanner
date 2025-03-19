import { MapPin, Train, Home, Map, DollarSign, Utensils } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { checkisArray } from '../utils/Helper';

const Card = ({ heading, budgetHeading, content, data }) => {
    const [isContentArray, setIsContentArray] = useState(false);
console.log(heading,content)
    useEffect(() => {
        setIsContentArray(checkisArray(content));
    }, [content]);

    const getIcon = (heading) => {
        const normalizedHeading = heading.replace(/\s+/g, '').trim();

        switch (normalizedHeading) {
            case "totalDistance":
                return <MapPin className="h-5 w-5 text-purple-500" />;
            case "bestTravelOptions":
                return <Train className="h-5 w-5 text-purple-500" />;
            case "accommodationRecommendations":
                return <Home className="h-5 w-5 text-purple-500" />;
            case "topPlacesToVisit(Budget-Friendly)":
                return <Map className="h-5 w-5 text-purple-500" />;
            case "budgetBreakdown(Estimate)":
                return <DollarSign className="h-5 w-5 text-purple-500" />;
            case "localFoodRecommendations":
                return <Utensils className="h-5 w-5 text-purple-500" />;
            default:
                return <MapPin className="h-5 w-5 text-purple-500" />;
        }
    };



    const formatContent = (content) => {
        if (isContentArray) {
            return (
                <ul className="space-y-2">
                    {content.map((item, index) => (
                        <li key={index} className="text-gray-300">
                            {typeof item === "object" ? (
                                <div>
                                    {Object.entries(item).map(([key, value]) => (
                                        <p key={key}>
                                            <span className=" text-purple-300 tracking-wide capitalize">{key}:</span> {value}
                                        </p>
                                        
                                    ))}
                                </div>
                            ) : (
                                    item
                            )}
                        </li>
                    ))}
                </ul>
            );
        } 
     else {
            return <p className="text-gray-300">{JSON.stringify(content).replace(/"/g, '')}</p>;
        }
    };


    return (
        <div className="bg-[#252533] w-full rounded-xl p-6 border border-purple-900/30">
            {heading && (
                <div className="flex items-center gap-2 mb-4">
                    {getIcon(heading.trim())}
                    <h3 className="font-bold md:text-lg text-base capitalize text-white">
                        {heading.replace(/([A-Z])/g, ' $1')}
                    </h3>
                </div>
            )}
            {budgetHeading && <h3 className="font-bold text-lg capitalize text-white">
                {budgetHeading.replace(/([A-Z])/g, ' $1')}
            </h3>}

            {content && <div className="text-gray-300 space-y-2">
                {formatContent(content)}
            </div>}
            {data && <div className='text-white'>
                <div>   {data.day} </div>
                <div>{data?.activities.map((activity) => <div className='flex gap-2'>
                    <h3>{activity.time}:</h3>
                    <div>{activity.description}</div>
                </div>)} </div>
            </div>}
        </div>
    );
};

export default Card;