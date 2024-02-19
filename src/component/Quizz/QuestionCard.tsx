import React from "react";

type QuestionProps = {
    question: string;
    choices: string[];
};

export default function QuestionCard({ question, choices }: QuestionProps) {
    return (
        <div>
            <h4>{question}</h4>
            <ul>
                {choices.map((element, index) => (
                    <li key={index}>
                        <input type="radio" />
                        <label>{element}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
