import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
    answer: "SELECT"
  },
  {
    question: "Which clause is used to filter records in SQL?",
    options: ["FILTER", "WHERE", "HAVING", "IF"],
    answer: "WHERE"
  },
  {
    question: "What does the PRIMARY KEY constraint ensure?",
    options: ["Unique values", "Not null", "Both unique and not null", "Foreign reference"],
    answer: "Both unique and not null"
  },
  {
    question: "Which SQL command is used to add new records to a table?",
    options: ["ADD", "INSERT", "CREATE", "APPEND"],
    answer: "INSERT"
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    answer: "Structured Query Language"
  }
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[index];
  const progress = ((index + (finished ? 1 : 0)) / QUESTIONS.length) * 100;

  function handleOptionClick(option) {
    if (selected || finished) return;
    setSelected(option);
    if (option === current.answer) {
      setScore(score + 1);
    }
  }

  function handleNext() {
    if (!selected) return;
    if (index === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected("");
  }

  function handleRestart() {
    setIndex(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  }

  return (
    <section className="card">
      <h1>Play quiz</h1>
      <div className="progressWrap">
        <div className="progressBar" style={{ width: `${progress}%` }} />
      </div>

      {finished ? (
        <div className="result">
          <p>
            You scored <strong>{score}</strong> out of <strong>{QUESTIONS.length}</strong>
          </p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="counterWrapper">
            <p className="counter">
              Question {index + 1} / {QUESTIONS.length}
            </p>
            <p className="counter">
              Score: {score}
            </p>
          </div>
          <h2>{current.question}</h2>
          <div className="options">
            {current.options.map((option) => {
              const isCorrect = selected && option === current.answer;
              const isWrong = selected === option && option !== current.answer;
              const className = isCorrect ? "correct" : isWrong ? "wrong" : "";
              return (
                <button key={option} className={className} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              );
            })}
          </div>
          <button className="next" onClick={handleNext} disabled={!selected}>
            {index === QUESTIONS.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </section>
  );
}

export default Quiz;