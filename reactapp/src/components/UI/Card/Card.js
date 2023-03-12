import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = (props) => {

    return (
        <div className="Card">
            <h4>{props.question}</h4>
            <div className="options_container">
                {props.options ? Object.values(props.options).map((option, index) => (
                    <Button key={index} onClick={() => { props.onAnswerSelected(index); }}>
                        <input type="radio" id={`option${index}`} name={`question${props.questionIndex}`} value={index} checked={props.selectedAnswer === index} onChange={() => props.onAnswerSelected(index)} disabled={props.disabled} />
                        <label htmlFor={`option${index}`}>{option}</label>
                    </Button>
                ))
                    : null}
            </div>
        </div>
    );
};

export default Card;