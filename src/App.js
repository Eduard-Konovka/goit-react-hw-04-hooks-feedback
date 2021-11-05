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
    total: 0,
    positivePercentage: `${0}%`,
  };

  setStatistics = option => {
    this.setState({ [option]: this.state[option] + 1 });
    setTimeout(() => {
      this.countTotalFeedback();
      this.countpositivePercentagePercentage();
    }, 0);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    this.setState({ total: good + neutral + bad });
  };

  countpositivePercentagePercentage = () => {
    const { good, total } = this.state;

    this.setState({
      positivePercentage: `${Math.round((good / total) * 100)}%`,
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const statistics = this.setStatistics;

    return (
      <Container title="Виджет отзывов">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state).slice(0, 3)}
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
