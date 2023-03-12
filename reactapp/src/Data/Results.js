import Button from '../components/UI/Button/Button';
import './Result.css';
function Results({ onResetQuiz }) {
    return (
        <div className="results">
            <Button onClick={onResetQuiz}>Start Quiz</Button>
        </div>
    );
}

export default Results;