import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/surveys";

export default function SurveyForm() {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([{ question_text: "", question_type: "" }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question_text: "", question_type: "" }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSurvey = { title, questions };

        try {
            await axios.post(API_URL, newSurvey);
            alert("Survey Created Successfully!");
            setTitle("");
            setQuestions([{ question_text: "", question_type: "" }]);
        } catch (error) {
            console.error("Error creating survey:", error);
            alert("Failed to create survey.");
        }
    };

    return (
        <div>
            <h2>Create a Survey</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Survey Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {questions.map((q, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Question"
                            value={q.question_text}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[index].question_text = e.target.value;
                                setQuestions(newQuestions);
                            }}
                        />
                        <select
                            value={q.question_type}
                            onChange={(e) => {
                                const newQuestions = [...questions];
                                newQuestions[index].question_type = e.target.value;
                                setQuestions(newQuestions);
                            }}
                        >
                            <option value="">Select Type</option>
                            <option value="text">Text</option>
                            <option value="multiple-choice">Multiple Choice</option>
                        </select>
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion}>Add Question</button>
                <button type="submit">Create Survey</button>
            </form>
        </div>
    );
}
