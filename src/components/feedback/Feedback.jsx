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

  countTotalFeedback(buttons) {
    let total = 0;
    for (let option of Object.values(buttons)) {
      total += option;
    }
    return total;
  }

  countPositiveFeedbackPercentage(positive, all) {
    let percents = 0;
    percents = (positive * 100) / all;
    return percents.toFixed();
  }

  render() {
    return (
      <Section title="Please leave feedback">
        <Options options={this.state} onLeaveFeedback={this.allClick}></Options>
        {Object.values(this.state).every(value => value === 0) ? (
          <Notification messege="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state.good,
              this.countTotalFeedback(this.state)
            )}
          ></Statistics>
        )}
      </Section>
    );
  }
}

export default Feedback