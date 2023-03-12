import React from 'react';

function Banner({ questionsCorrect, numQuestions }) {
    return (
        <div>
            <h1>Quizz App</h1>
            <h2>You have answered {questionsCorrect} / {numQuestions}  Correctly</h2>
        </div>
    );
}

export default Banner;