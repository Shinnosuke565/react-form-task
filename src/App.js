import React, { useState } from 'react';
import BasicInfoForm from './BasicInfoForm';
import SurveyForm from './SurveyForm';
import ConsultationForm from './ConsultationForm'; // 必要に応じてインポート

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('basicInfo');
  const [basicInfo, setBasicInfo] = useState(null);
  const [surveyAnswers, setSurveyAnswers] = useState(null);

  const handleBasicInfoNext = (info) => {
    setBasicInfo(info);
    setCurrentScreen('survey');
  };

  const handleSurveyBack = () => {
    setCurrentScreen('basicInfo');
  };

  const handleSurveyNext = (answers) => {
    setSurveyAnswers(answers);
    setCurrentScreen('consultation');
  };

  return (
    <div>
      {currentScreen === 'basicInfo' && (
        <BasicInfoForm onNext={handleBasicInfoNext} />
      )}
      {currentScreen === 'survey' && (
        <SurveyForm onBack={handleSurveyBack} onNext={handleSurveyNext} />
      )}
      {currentScreen === 'consultation' && (
        <ConsultationForm onBack={handleSurveyBack} /* onNext={...} */ />
      )}
    </div>
  );
};

export default App;