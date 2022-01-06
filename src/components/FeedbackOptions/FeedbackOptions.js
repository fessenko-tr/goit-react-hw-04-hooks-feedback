import PropTypes from "prop-types";
import React from "react";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonsSet = options.map((e) => (
    <button
      className={s.btn}
      onClick={() => {
        onLeaveFeedback({ button: e.toLowerCase(), payload: 1 });
      }}
      key={e}
    >
      {e}
    </button>
  ));

  return <div>{buttonsSet}</div>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
