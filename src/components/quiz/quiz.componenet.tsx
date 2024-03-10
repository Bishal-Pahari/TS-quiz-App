import { useState } from "react";
import Question from "../question/question.component";
import Header from "../header/header.component";

const questions = [
  {
    id: 1,
    question: "Which event marked the beginning of World War II?",
    choices: [
      "Invasion of Poland",
      "Battle of Stalingrad",
      "Attack on Pearl Harbor",
    ],
    answer: "Invasion of Poland",
  },
  {
    id: 2,
    question: "Who was the leader of Nazi Germany during World War II?",
    choices: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini"],
    answer: "Adolf Hitler",
  },
  {
    id: 3,
    question:
      "What was the code name for the Allied invasion of Normandy in 1944?",
    choices: [
      "Operation Overlord",
      "Operation Barbarossa",
      "Operation Market Garden",
    ],
    answer: "Operation Overlord",
  },
  {
    id: 4,
    question:
      "Which country was not part of the Axis Powers during World War II?",
    choices: ["France", "Italy", "Japan"],
    answer: "France",
  },
  {
    id: 5,
    question:
      "Which city was the first to be attacked with an atomic bomb during World War II?",
    choices: ["Hiroshima", "Nagasaki", "Tokyo"],
    answer: "Hiroshima",
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <>
      <Header />
      <p className="question-number-indicator">
        Current Question: {currentQuestion + 1}/ {questions.length}
      </p>

      {currentQuestion < questions.length - 1 ? (
        <div className="quiz-container">
          <Question
            id={questions[currentQuestion].id}
            question={questions[currentQuestion].question}
            choices={questions[currentQuestion].choices}
            onAnswer={checkAnswer}
          />
        </div>
      ) : (
        <div className="quiz-container">
          <p className="end-alert">End of Questions</p>
          <span className="score-display">Your Score is : {score} "</span>
        </div>
      )}
    </>
  );
};

export default Quiz;
