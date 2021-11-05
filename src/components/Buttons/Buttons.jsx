import PropTypes from 'prop-types';
import s from './Buttons.module.css';

const Buttons = ({options, onLeaveFeedback, onTotal, onPositiveFeedback }) => {
  return (
    <div className={s.box}>
      {options.map(option => (
        <button
          type="button"
          key={option} 
          className={s.btn}
          onClick={() => {
            onLeaveFeedback(option)
            setTimeout(() => {
              onTotal(option)
              onPositiveFeedback(option)
            }, 0);
          }}
        >
          {option.charAt(0).toUpperCase() + option.substring(1)}
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onTotal: PropTypes.func.isRequired,
  onPositiveFeedback: PropTypes.func.isRequired,
};

export default Buttons;
