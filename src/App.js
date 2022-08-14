import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true,isWrong:false },
      { answerText: "Inglês", isCorrect: false,isWrong:true },
      { answerText: "Francês", isCorrect: false,isWrong:true },
      { answerText: "Alemão", isCorrect: false,isWrong:true },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true,isWrong:false },
      { answerText: "Austrália e Afeganistã", isCorrect: false,isWrong:true },
      { answerText: "Itália e Chade", isCorrect: false,isWrong:true },
      { answerText: "Brasil e Congo", isCorrect: false,isWrong:true },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true ,isWrong:false },
      { answerText: "Intel", isCorrect: false,isWrong:true },
      { answerText: "Amazon", isCorrect: false,isWrong:true },
      { answerText: "Microsoft", isCorrect: false,isWrong:true },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true,isWrong:false },
      { answerText: "Vendo vídeo", isCorrect: false,isWrong:true },
      { answerText: "Lendo", isCorrect: false,isWrong:true },
      { answerText: "Dormindo", isCorrect: false,isWrong:true },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [Wrongscore, setWrongScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    else{
      setWrongScore(Wrongscore+1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
        <ProgressBar label='correct' variant="success" now={score*25} />
        <br></br>
        <ProgressBar label='wrong' variant="danger" now={Wrongscore*25} />
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        
        
        <>
        <ProgressBar label='correct' variant="success" now={score*25} />
        <br></br>
        <ProgressBar label='wrong' variant="danger" now={Wrongscore*25} />
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                  
                </button>
                
              )
            )}
          </div>
                      

        </>
        
      )}
    </div>
  );
}

export default App;
