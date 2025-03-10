import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/surveys";

export default function SurveyList() {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setSurveys(response.data))
            .catch(error => console.error("Error fetching surveys:", error));
    }, []);

    return (
        <div>
            <h2>Surveys</h2>
            <ul>
                {surveys.map(survey => (
                    <li key={survey.id}>{survey.title}</li>
                ))}
            </ul>
        </div>
    );
}
