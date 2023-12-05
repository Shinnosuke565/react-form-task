import React, { useState } from 'react';

const ConsultationForm = ({ onBack }) => {
  const [consultation, setConsultation] = useState('');

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <div className="step-indicator">STEP3</div>
      <div><h1>ご相談内容をご記入ください</h1></div>
      <div>- ご相談内容 -</div>
      <textarea
        value={consultation}
        onChange={(e) => setConsultation(e.target.value)}
      />
      <br />
      <button onClick={handleBack}>前へ戻る</button>
      <button>次へ進む</button>
    </div>
  );
};

export default ConsultationForm;