import React from "react";
import { AnswerObject } from "../App";
import { RecapWrapper } from "./QuestionCard.styles";

type Props = {
    answers: AnswerObject[] | [];
};

const AnswerRecap: React.FC<Props> = ({ answers }) => {
    if (answers === undefined) {
        return null;
    }
    return (
        <RecapWrapper>
            <ol>
                {answers.map((answer: AnswerObject, index: number) => {
                    return (
                        <li key={index}>
                            <p>Question: {answer.question}</p>
                            <p>Answer: {answer.correctAnswer}</p>
                            <p>User Answer: {answer.answer}</p>
                        </li>
                    );
                })}
            </ol>
        </RecapWrapper>
    );
};

export default AnswerRecap;
