import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Stats from "./components/Statistics";
import Section from "./components/Section";
import NotificationMessage from "./components/NotificationMessage";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (btn) => {
    this.setState((current) => ({ [btn]: current[btn] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback());

  render() {
    const feedbackTitle = "Please leave feedback";
    const statisticsTitle = "Statistics";
    const feedBakBtnOptions = Object.keys(this.state);
    const onEmptyFeedbackMsg = "There is no feedback";
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={feedbackTitle}>
          <FeedbackOptions
            options={feedBakBtnOptions}
            onLeaveFeedback={this.addFeedback}
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
}

export default App;
