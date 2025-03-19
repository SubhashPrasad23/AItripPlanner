import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const fetchGeminiResponse = async (userQuery, setResponse) => {
    try {
        const prompt = `Act as a travel planning expert and generate a detailed itinerary based on the user's preferences. Return the response in a **valid** JSON format without Markdown or extra text.

User Preferences:
- Traveling from: ${userQuery.source}
- Destination: ${userQuery.destination}
- Dates: ${userQuery.departDate} to ${userQuery.returnDate}
- Budget: ${userQuery.budget} rupees
- Number of Travelers: ${userQuery.travelers}
- Interests: ${userQuery.interests.length > 0 ? userQuery.interests : "No specific interests"}
- Preferred Mode of Transport: ${userQuery.mode === "none" ? "Suggest all available options (Flight, Train, Bus)" : userQuery.mode}

Strict JSON Format:
{
    "totalDistance": "Approximate total travel distance in kilometers",
    "bestTravelOptions": [
        { "Flight/Train/Bus", "Details", "Approximate cost" }
    ],
    "accommodationRecommendations": [
        { "Hotel", "Brief Description", "Approximate range" }
    ],
    "topPlacesToVisit": [
        { "Place", "Why it's worth visiting","Entry fee (if any)" }
    ],
    "budgetBreakdownEstimate": {
        "transport": "Estimated cost",
        "accommodation": "Estimated cost",
        "food": "Estimated cost",
        "sightseeing": "Estimated cost",
        "total": "Total estimated cost"
    },
    "localFoodRecommendations": [
        { "Dish", "Brief description", "Cost" }
    ],
    "dailyItinerary": [
        {
            "day": "Day 1",
            "activities": [
                { "time": "08:00 AM", "description": "Breakfast at a popular local café" },
                { "time": "10:00 AM", "description": "Visit the main attraction of the city" },
                { "time": "01:00 PM", "description": "Lunch at a well-rated restaurant" },
                { "time": "03:00 PM", "description": "Explore a local market or museum" },
                { "time": "06:00 PM", "description": "Relax at a scenic viewpoint or park" },
                { "time": "08:00 PM", "description": "Dinner at a famous eatery" },
                { "time": "10:00 PM", "description": "Return to hotel and rest" }
            ]
        }
    ]
}`;

        const response = await axios.post(
            API_URL,
            {
                contents: [{ parts: [{ text: prompt }] }],
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        if (response.data && response.data.candidates) {
            let rawText = response.data.candidates[0].content.parts[0].text;

            rawText = rawText.replace(/```json|```/g, "").trim(); 

            try {
                const parsedResponse = JSON.parse(rawText);
                setResponse(parsedResponse);
                console.log(parsedResponse)
            } catch (jsonError) {
                console.error("JSON Parse Error:", jsonError);
            }
        }

    } catch (error) {
        console.error("Error fetching Gemini response:", error);
    }
};
