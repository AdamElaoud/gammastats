import PropTypes from "prop-types";
import Icon from "../icon/Icon";
import "./StatRow.scss";

export default function StatRow(props) {
    const { data, icon, title } = props;

    let icons;
    if (Array.isArray(icon)) {
        icons = icon.map(type => <Icon key = {type} icon = {type} size = "md"/>)
    
    } else {
        icons = <Icon icon = {icon} size = "md"/>;
    }

    return (
        <div className = "stat-row">
            <span className = "stat-title">{title}</span>
            <span className = "stat-data">
                {data}
                {icons}
            </span>
        </div>
    );
}

StatRow.propTypes = {
    data: PropTypes.number.isRequired,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
    title: PropTypes.string.isRequired,
}