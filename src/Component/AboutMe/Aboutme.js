import React, { useState } from 'react'
import './Aboutme.css'

 const Aboutme = () => {
	const questions = [
		{
			questionText: 'What is Ikeoluwa`s birthday month',
			answerOptions: [
				{ answerText: '1st of August', isCorrect: false },
				{ answerText: '22nd of July', isCorrect: false },
				{ answerText: '4th of October', isCorrect: true },
				{ answerText: '10th of December', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Incredible Global Network?',
			answerOptions: [
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Ikeoluwa Ashade', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Fela Durotoye', isCorrect: false },
			],
		},
		{
			questionText: 'What programming Language is Ikeoluwa skillful at',
			answerOptions: [
				{ answerText: 'CSS, JavaScript', isCorrect: true },
				{ answerText: 'PHP, TypeScript', isCorrect: false },
				{ answerText: 'Python, JavaScript', isCorrect: false },
				{ answerText: 'SQL, Ruby', isCorrect: false },
			],
		},
		{
			questionText: 'What Framework is Ikeoluwa familiar with',
			answerOptions: [
				{ answerText: 'Chakra-Ui, Bootstrap, React', isCorrect: false },
				{ answerText: 'Angular, ASP, Django', isCorrect: false },
				{ answerText: 'Vue, Laravel, Rails', isCorrect: false },
				{ answerText: 'Bootstrap, Tailwind, React', isCorrect: true },
			],
		},
		{
			questionText: 'What is Ikeoluwa`s favorite color?',
			answerOptions: [
				{ answerText: 'Red, White & Gold', isCorrect: false },
				{ answerText: 'Maroon, Orange & Darkgreen', isCorrect: false },
				{ answerText: 'Blue, Black & Grey', isCorrect: true },
				{ answerText: 'Red, Pink & Wine', isCorrect: false },				
			],
		},
		{
			questionText: 'What does Ikeoluwa feels passionate about',
			answerOptions: [
				{ answerText: 'Reading & Creating Content', isCorrect: false },
				{ answerText: 'Coding & Designing', isCorrect: true },
				{ answerText: 'Dancing & Playing drums', isCorrect: false },				
				{ answerText: 'Capturing Moment & Editing', isCorrect: false },				
			],
		},
		{
			questionText: 'What is Ikeoluwa`s favorite quote',
			answerOptions: [
				{ answerText: 'We only live once', isCorrect: false },
				{ answerText: 'The Sky is the starting point', isCorrect: false },
				{ answerText: 'Fuel your Passion', isCorrect: false },
				{ answerText: 'Never Give Up', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='Main-App'>
			{showScore ? (
				<div className='Score-Result'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='Question-Area'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Aboutme