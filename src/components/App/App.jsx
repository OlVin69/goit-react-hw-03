import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { useState, useEffect } from 'react';

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('saved-values');
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = option => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const relationFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        values={values}
        onUpdate={updateFeedback}
        total={totalFeedback}
        resetTotal={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          totalValue={totalFeedback}
          relation={relationFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
