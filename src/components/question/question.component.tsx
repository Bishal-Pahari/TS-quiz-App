import React from "react";

interface QuestionProps {
  id: number;
  question: string;
  choices: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  id,
  question,
  choices,
  onAnswer,
}): JSX.Element => {
  return (
    <>
      <div className="question-container">
        <h1>{question}</h1>
        <div className="choice-container">
          {choices.map((choice, index) => (
            <button
              key={id + "-" + index}
              className="btn-choice"
              onClick={() => onAnswer(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
