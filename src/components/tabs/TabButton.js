import "./TabButton.scss";
import PropTypes from "prop-types";

export default function TabButton(props) {
    const { currentPage, page, setPage } = props;

    const changePage = () => {
        setPage(page);
    };

    const isCurrentPage = currentPage === page;
    let classes = "tab-button";
    classes = isCurrentPage ? classes + " " + "active" : classes;

    return (
        <button className = {classes} onClick = {changePage}>
            {props.children}
        </button>
    );
}

TabButton.propTypes = {
    currentPage: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired
}