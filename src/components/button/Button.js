import "./Button.scss";
import PropTypes from "prop-types";

export default function Button(props) {
    const { className, onClick } = props;

    let classes = "button";
    classes = className ? classes + " " + className : classes;

    return (
        <button className = {classes} onClick = {onClick}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}