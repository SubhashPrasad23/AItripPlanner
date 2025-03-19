import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import TravelForm from "../components/TravelForm";
import Features from "../components/Features";
import ItineraryDisplay from "../components/ItineraryDisplay";
import { fetchGeminiResponse } from "../api/geminiApi";

const Home = () => {
    const [loading, setLoading] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        source: "",
        destination: "",
        departDate: today, 
        returnDate: today, 
        travelers: "1",
        interests: "",
        mode: "none",
    });

    const [errors, setErrors] = useState({
        source: "",
        destination: "",
        departDate: "",
        returnDate: "",
        interests: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { source: "", destination: "", departDate: "", returnDate: "", interests: "" };

        if (!formData.source) {
            newErrors.source = "Source is required";
            isValid = false;
        }
        if (!formData.destination) {
            newErrors.destination = "Destination is required";
            isValid = false;
        }
        if (!formData.departDate) {
            newErrors.departDate = "Departure date is required";
            isValid = false;
        }
        if (!formData.returnDate) {
            newErrors.returnDate = "Return date is required";
            isValid = false;
        }
        if (!formData.interests) {
            newErrors.interests = "Interest is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const [response, setResponse] = useState([]);
    const scrollFormRef = useRef();
    const scrollItineraryRef = useRef();

    const HandlescrollForm = () => {
        if (scrollFormRef.current) {
            scrollFormRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (scrollItineraryRef.current) {
            scrollItineraryRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [response]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (validateForm()) {
                await fetchGeminiResponse(formData, setResponse);
            }
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0f0f13]">
            <Hero scrollRef={scrollFormRef} onClick={HandlescrollForm} />
            <TravelForm
                scrollRef={scrollFormRef}
                loading={loading}
                setLoading={setLoading}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
            />
            {Object.keys(response).length > 0 && <ItineraryDisplay response={response} scrollItineraryRef={scrollItineraryRef} />}
            <Features />
        </main>
    );
};

export default Home;