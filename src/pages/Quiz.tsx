import React, { useState } from 'react'; 
import '../styles/Quiz.css';
import quizImage from '../assets/images/quiz.jpg';

const questions = [
  {
    question: "Qual a comida favorita da noiva?",
    options: ["Pizza", "Sushi", "Churrasco", "Hamburguer"],
    correctAnswer: 1
  },
  {
    question: "Qual a marca de cigarro favorita do noivo?",
    options: ["Marlboro", "Dunhill", "Camel", "Gudan"],
    correctAnswer: 2
  },
  {
    question: "Qual o apelido carinhoso dos noivos?",
    options: ["Mor", "Morzi", "Amor", "Morzu"],
    correctAnswer: 3
  },
  {
    question: "Aonde foi o pedido de namoro?",
    options: ["Praia", "Garibaldi", "Caxias do Sul", "Porto Alegre"],
    correctAnswer: 0
  },
  {
    question: "Aonde foi o primeiro Beijo?",
    options: ["Bar do Joe", "Level", "Praia", "Cinema"],
    correctAnswer: 0
  },
  {
    question: "Qual o nome do nosso filho?",
    options: ["Cachorro", "Sashimi", "Chuleta", "Sushi"],
    correctAnswer: 3
  },
  {
    question: "Onde foi o pedido de casamento?",
    options: ["Milão", "Como", "Xangri-lá", "Vale dos Vinhedos"],
    correctAnswer: 1
  },
  {
    question: "Aonde será o casamento?",
    options: ["Frankfurt - Alemanha", "Paris - França", "Merate - Itália", "Vale dos Vinhedos - Brasil"],
    correctAnswer: 2
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    const currentQ = questions[currentQuestion]; // Agora a variável é declarada corretamente no escopo

    if (currentQ.correctAnswer === 9 || index === currentQ.correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
          setIsCorrect(null);
        } else {
          setQuizCompleted(true);
        }
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {quizCompleted ? (
          <div className="quiz-complete">
            <h2>Parabéns! 🎉</h2>
            <p>Você completou o quiz!<br></br>Aqui está um convite especial para você ♥:</p>
            <img src={quizImage} alt="Convite especial" className="quiz-image"/>
          </div>
        ) : (
          <div>
            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
            <ul className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => {
                const currentQ = questions[currentQuestion]; // Garantindo que a variável esteja dentro do escopo correto
                return (
                  <li
                    key={index}
                    className={
                      isCorrect !== null && index === currentQ.correctAnswer
                        ? 'correct' 
                        : isCorrect === false && index !== currentQ.correctAnswer
                        ? 'incorrect' 
                        : ''
                    }
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
            {isCorrect === false && <p style={{ color: 'red' }}>Resposta incorreta, tente novamente!</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
