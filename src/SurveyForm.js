import React, { useState } from 'react';

const SurveyForm = ({ onBack, onNext }) => {
  const questions = [
    '現在生命保険に加入されていますか？',
    '現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？',
    '過去５年以内に、病気やけがで、手術をうけたことまたは断続して7日以上の入院をしたことがありますか？',
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (event, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="step-indicator">STEP2</div>
      <div><h1>以下にお答えください</h1></div>
      {questions.map((question, index) => (
        <div key={index}>
          <div>{question}</div>
          <div>
            <input
              type="radio"
              id={`question-${index}-yes`}
              name={`question-${index}`}
              value="はい"
              checked={answers[index] === 'はい'}
              onChange={(e) => handleAnswerChange(e, index)}
            />
            <label htmlFor={`question-${index}-yes`}>はい</label>
            <input
              type="radio"
              id={`question-${index}-no`}
              name={`question-${index}`}
              value="いいえ"
              checked={answers[index] === 'いいえ'}
              onChange={(e) => handleAnswerChange(e, index)}
            />
            <label htmlFor={`question-${index}-no`}>いいえ</label>
          </div>
        </div>
      ))}
      <button onClick={onBack}>前に戻る</button>
      <button type="submit">次へ進む</button>
    </form>
  );
};

export default SurveyForm;