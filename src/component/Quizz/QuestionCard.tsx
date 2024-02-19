import React from "react";

type QuestionProps = {
    question: string;
    responseList: string[];
};

export default function QuestionCard({
    question,
    responseList,
}: QuestionProps) {
    return (
        <div>
            <h4>{question}</h4>
            <ul>
                {responseList.map((element, index) => (
                    <li key={index}>
                        <input type="radio" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
