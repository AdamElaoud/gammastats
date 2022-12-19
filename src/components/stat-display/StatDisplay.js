import PropTypes from "prop-types";
import { accuracy, block, critical, damage, fishLuck, health, incoming, mana, outgoing, pierce, pipConversion, pips, resist, stunResist } from "../../util/formulas";
import Icon from "../icon/Icon";
import StatRow from "./StatRow";
import "./StatDisplay.scss";

const QUADRANT_CONTENT = [
    { "Base": damage, "Rating": critical, "Health": outgoing, "Misc": stunResist },
    { "Base": resist, "Rating": block, "Health": incoming, "Misc": fishLuck },
    { "Base": accuracy, "Rating": pipConversion, "Health": health, "Misc": mana },
    { "Base": pierce, "Rating": pips, "Health": [], "Misc": [] },
];

export default function StatDisplay(props) {
    const { agility, intellect, page, power, strength, will, quadrant } = props;

    const quadrantData = QUADRANT_CONTENT[quadrant];
    const stats = [...quadrantData[page]];
    const boosts = stats.pop();
    const title = stats.pop();

    
    const isBlank = stats.length === 0;
    const blankClass = isBlank ? "blank" : "";

    return (
        <div className = {`stat-display ${blankClass}`}>
            {!isBlank && <div className = "title">
                {title}
            </div>}

            {!isBlank && <div className = "boosts">
                Boosted by
                <Icon icon = {boosts[0]} size = "sm"/>
                &
                <Icon icon = {boosts[1]} size = "sm"/>
            </div>}

            {stats.map(({title, func, icon}) => <StatRow key = {title} data = {func(agility, intellect, power, strength, will)} icon = {icon} title = {title}/>)}
        </div>
    );
}

StatDisplay.propTypes = {
    agility: PropTypes.number.isRequired,
    intellect: PropTypes.number.isRequired,
    page: PropTypes.string.isRequired,
    power: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    will: PropTypes.number.isRequired,
    quadrant: PropTypes.number.isRequired
}