import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          className={css.feedbackBtn}
          type="button"
          onClick={e => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf({
    option: propTypes.string,
  }),
  onLeaveFeedback: propTypes.func.isRequired,
};