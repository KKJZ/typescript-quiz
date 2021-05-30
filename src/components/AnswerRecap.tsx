import React from "react";
import { AnswerObject } from "../App";

type Props = {
    answers: AnswerObject[] | [];
};

const AnswerRecap: React.FC<Props> = ({ answers }) => {
    if (answers === undefined) {
        return null;
    }
    <ol>
        {answers.forEach((answer, index) => {
            <li key={index}>
                <p>Question: {answer.question}</p>
                <p>Answer: {answer.correctAnswer}</p>
                <p>User Answer: {answer.answer}</p>
            </li>;
        })}
        ;
    </ol>;
};

export default AnswerRecap;
