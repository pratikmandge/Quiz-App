import React from 'react';

function Question(props) {
    return (
        <div className="question">
            <h4>{props.question}</h4>
            <div className="answer-options">
                {props.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => props.onAnswerSelected(index)}
                        disabled={props.disabled}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;