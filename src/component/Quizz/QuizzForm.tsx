import React from "react";
import QuestionCard from "./QuestionCard";

const questionBlock = [
    {
        id: 100,
        question: "question",
        responselist: ["response1", "response2", "response3"],
    },
    {
        id: 101,
        question: "question",
        responselist: ["response1", "response2", "response3"],
    },
];

export default function QuizzForm() {
    return (
        <form className="quizz-form">
            <QuestionCard
                question={questionBlock[0].question}
                responseList={questionBlock[0].responselist}
            />
        </form>
    );
}
