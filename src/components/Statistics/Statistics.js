import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Stats({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {`${positiveFeedback}%`}</li>
    </ul>
  );
}

Stats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Stats;
