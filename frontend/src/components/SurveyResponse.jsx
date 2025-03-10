import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/responses";

export default function SurveyResponse() {
    const [surveyId, setSurveyId] = useState("");
    const [responses, setResponses] = useState([""]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, { survey_id: parseInt(surveyId), responses });
            alert("Response Submitted Successfully!");
            setSurveyId("");
            setResponses([""]);
        } catch (error) {
            console.error("Error submitting response:", error);
            alert("Failed to submit response.");
        }
    };

    return (
        <div>
            <h2>Submit a Survey Response</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Survey ID"
                    value={surveyId}
                    onChange={(e) => setSurveyId(e.target.value)}
                />
                <textarea
                    placeholder="Your Response"
                    value={responses[0]}
                    onChange={(e) => setResponses([e.target.value])}
                />
                <button type="submit">Submit Response</button>
            </form>
        </div>
    );
}
