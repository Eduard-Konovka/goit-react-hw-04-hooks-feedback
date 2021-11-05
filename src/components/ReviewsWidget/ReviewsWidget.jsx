import { Component } from 'react'
// import PropTypes from 'prop-types'
import Buttons from '../Buttons';
import s from './ReviewsWidget.module.css';

class ReviewsWidget extends Component {
  // static propTypes = {
  //   type: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: `${0}%`,
  }

  setStatistics = option => {
    this.setState({ [option]: this.state[option] + 1 })
  }
 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    
    this.setState({ total: good + neutral + bad})
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state
    
    this.setState({ positiveFeedback: `${Math.round(good / total * 100)}%`})
  }

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state
    // const statistics = this.setStatistics()
    // const totalFeedback = this.countTotalFeedback()
    // const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage()
    
    return (
      <>
        <div className={s.box}>
          <h3 className={s.title}>Please leave feedback</h3>
          <Buttons
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.setStatistics}
            onTotal={this.countTotalFeedback}
            onPositiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </div>

        <div className={s.box}>
          <h3 className={s.title}>Statistics</h3>
          <p className={s.category}>Good: {good} </p>
          <p className={s.category}>Neutral: {neutral}</p>
          <p className={s.category}>Bad: {bad}</p>
          <p className={s.category}>Total: {total}</p>
          <p className={s.category}>Positive feedback: {positiveFeedback}</p>
        </div>
      </>
    )
  }
}

export default ReviewsWidget;
