import React, { useReducer } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Stats from "./components/Statistics";
import Section from "./components/Section";
import NotificationMessage from "./components/NotificationMessage";

function App() {
  const [state, dispatch] = useReducer(addFeedback, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackTitle = "Please leave feedback";
  const statisticsTitle = "Statistics";
  const onEmptyFeedbackMsg = "There is no feedback";
  const { good, neutral, bad } = state;
  const feedBakBtnOptions = Object.keys(state);
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const totalFeedbackCount = countTotalFeedback();

  function addFeedback(state, action) {
    const { button, payload } = action;
    return {
      ...state,
      [button]: state[button] + payload,
    };
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / countTotalFeedback());
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  return (
    <>
      <Section title={feedbackTitle}>
        <FeedbackOptions
          options={feedBakBtnOptions}
          onLeaveFeedback={dispatch}
        />
      </Section>
      <Section title={statisticsTitle}>
        {totalFeedbackCount ? (
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positiveFeedback={positiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message={onEmptyFeedbackMsg} />
        )}
      </Section>
    </>
  );
}

export default App;
