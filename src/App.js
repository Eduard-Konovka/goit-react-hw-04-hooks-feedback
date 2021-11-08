import { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStatistics = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  // setStatistics = option => this.setState({ [option]: this.state[option] + 1 });

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countpositivePercentagePercentage = () =>
    `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`;

  render() {
    const { good, neutral, bad } = this.state;
    const statistics = this.setStatistics;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countpositivePercentagePercentage();

    return (
      <Container title="Reviews widget">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={statistics}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
