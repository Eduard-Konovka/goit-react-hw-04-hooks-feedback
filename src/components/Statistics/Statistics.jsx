import { Component } from 'react'
import PropTypes from 'prop-types'
import s from './Statistics.module.css';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props
    
    return (
      <ul className={s.box}>
        <li className={s.category}>Good: {good} </li>
        <li className={s.category}>Neutral: {neutral}</li>
        <li className={s.category}>Bad: {bad}</li>
        <li className={s.category}>Total: {total}</li>
        <li className={s.category}>Positive feedback: {positivePercentage}</li>
      </ul>
    )
  }
}

export default Statistics;

// =============================== Alternative ===============================

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <div className={s.box}>
//         <h3 className={s.title}>Statistics</h3>
//         <p className={s.category}>Good: {good} </p>
//         <p className={s.category}>Neutral: {neutral}</p>
//         <p className={s.category}>Bad: {bad}</p>
//         <p className={s.category}>Total: {total}</p>
//         <p className={s.category}>Positive feedback: {positivePercentage}</p>
//       </div>
//   );
// };

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.string.isRequired,
// };

// export default Statistics;