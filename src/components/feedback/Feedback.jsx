import { Component } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import Options from "./options/Options";
import Notification from "./notofication/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  allClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
     return Object.values(this.state).reduce(
       (accumulator, currentValue) => accumulator + currentValue
     );
  }

  countPositiveFeedbackPercentage() {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return ((good * 100) / total).toFixed();
  }

  render() {
       const { good, neutral, bad } = this.state;
       const total = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <Options options={this.state} onLeaveFeedback={this.allClick}></Options>
        {total=== 0 ? (
          <Notification messege="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    );
  }
}

export default Feedback