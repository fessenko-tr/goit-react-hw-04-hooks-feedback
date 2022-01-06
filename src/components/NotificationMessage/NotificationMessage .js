import PropTypes from "prop-types";

function NotificationMessage({ message }) {
  return <p>{message}</p>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
