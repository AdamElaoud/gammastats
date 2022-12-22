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

    const incrementStat = () => {
        if (stat < max)
            setStat(val => val + 1);
    };

    const decrementStat = () => {
        if (stat > 0)
            setStat(val => val - 1);
    };

    return (
        <div className = "stat-input">
            <Icon icon = {icon} size = "lg"/>
            <div className = "data">
                <input id = {icon} ref = {inputRef} className = "input" required onInput = {onInput} value = {stat} type = "number" min = "0" max = {max}/>
                <div className = "arrows">
                    <Icon className = "up" onClick = {incrementStat} icon = "up" size = "md" />
                    <Icon className = "down" onClick = {decrementStat} icon = "down" size = "md" />
                </div>
            </div>
        </div>
    );
}

StatInput.propTypes = {
    icon: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    setStat: PropTypes.func.isRequired,
    stat: PropTypes.number.isRequired
}