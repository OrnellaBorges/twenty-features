import React from "react";
import "./styleQuizz.css";
import ButtonQuizz from "./ButtonQuizz";
import QuizzForm from "./QuizzForm";

export default function QuizzContainer() {
    return (
        <section>
            <h2>Quizz Culture générale</h2>
            <QuizzForm />
            <ButtonQuizz />
        </section>
    );
}
