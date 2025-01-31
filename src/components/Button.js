import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' onClick={onClick}>{text}
        </button>
    );
};

Button.defaultProps = {
    text: 'Button',
    color: 'steelblue',
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Button;