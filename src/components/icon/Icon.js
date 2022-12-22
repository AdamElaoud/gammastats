import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconDefs, ImageIconDefs } from "./Icondef";
import "./Icon.scss";

export default function Icon(props) {
    const { className, icon, size, ...options } = props;
    
    let isFontAwesomeIcon = true;
    let iconDef = FontAwesomeIconDefs[icon];
    if (!iconDef) {
        iconDef = ImageIconDefs[icon];
        isFontAwesomeIcon = false;
    }

    let classes = "icon";
    classes = size ? classes + " " + size : classes;
    classes = className ? classes + " " + className : classes;

    if (!isFontAwesomeIcon) {
        return (
            <img {...options} alt = "icon" className = {classes} src = {iconDef} />
          );   
    }

    return (
        <FontAwesomeIcon {...options} className = {classes} icon = {iconDef} />
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.oneOf([...Object.keys(FontAwesomeIconDefs), ...Object.keys(ImageIconDefs)]).isRequired,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["sm", "md", "lg"])
}