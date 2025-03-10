import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import SurveyList from "./components/SurveyList";
import SurveyResponse from "./components/SurveyResponse";

export default function App() {
    return (
        <Router>
            <div>
                <h1>Survey Management System</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/create">Create Survey</a> | <a href="/respond">Submit Response</a>
                </nav>
                <Routes>
                    <Route path="/" element={<SurveyList />} />
                    <Route path="/create" element={<SurveyForm />} />
                    <Route path="/respond" element={<SurveyResponse />} />
                </Routes>
            </div>
        </Router>
    );
}
