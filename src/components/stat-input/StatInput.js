import PropTypes from "prop-types";
import { useRef } from "react";
import Icon from "../icon/Icon";
import "./StatInput.scss";

export default function StatInput(props) {
    const { icon, max, setStat, stat } = props;

    const inputRef = useRef();

    const onInput = (event) => {
        const { value, validity } = event.target;
        const { valid } = validity;

        // invalid if empty or includes "-" symbol (minimum is 0)
        if (valid)
            setStat(parseInt(value));
        else if (value === "") {
            setStat(0);
            inputRef.current.focus();
            inputRef.current.select();
        }
    }

    return (
        <div className = "stat-input">
            <Icon icon = {icon} size = "lg"/>
            <input id = {icon} ref = {inputRef} className = "stat-input-data" required onInput = {onInput} value = {stat} type = "number" min = "0" max = {max}/>
        </div>
    );
}

StatInput.propTypes = {
    icon: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    setStat: PropTypes.func.isRequired,
    stat: PropTypes.number.isRequired
}