import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.box}>
      <h3 className={s.title}>Statistics</h3>
      <p className={s.category}>Good: {good} </p>
      <p className={s.category}>Neutral: {neutral}</p>
      <p className={s.category}>Bad: {bad}</p>
      <p className={s.category}>Total: {total}</p>
      <p className={s.category}>Positive feedback: {positivePercentage}</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
