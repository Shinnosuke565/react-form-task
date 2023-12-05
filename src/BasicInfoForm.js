import React, { useState } from 'react';
import './BasicInfoForm.css'; 

const BasicInfoForm = ({ onNext }) => {
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext({ gender, birthdate: `${year}-${month}-${day}` });
  };

  // 年の選択肢を生成
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  // 月の選択肢を生成
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(<option key={i} value={i}>{i}</option>);
  }

  // 日の選択肢を生成
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="step-indicator">STEP1</div>
      <div className="form-section">
        <h1>お客様の情報を入力してください</h1>
        <div className="form-group">
          <label className="gender-label">- 性別 -</label>
          <div className="gender-options">
            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
            <label htmlFor="male">男性</label>
            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
            <label htmlFor="female">女性</label>
          </div>
        </div>
        <div className="form-group">
          <label className="birthdate-label">- 生年月日 -</label>
          <div className="birthdate-options">
            <select id="year" name="year" value={year} onChange={handleYearChange}>
              <option value="">1990年(平成2)</option>
              {years}
            </select>
            <label htmlFor="year">年</label>
            <select id="month" name="month" value={month} onChange={handleMonthChange}>
              <option value="">1 </option>
              {months}
            </select>
            <label htmlFor="month">月</label>
            <select id="day" name="day" value={day} onChange={handleDayChange}>
              <option value="">1</option>
              {days}
            </select>
            <label htmlFor="day">日</label>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="submit">次へ進む 〉</button>
      </div>
    </form>
  );
};

export default BasicInfoForm;