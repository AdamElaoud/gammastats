import { useEffect, useState } from "react";
import Button from './components/button/Button';
import { 
    MAX_BASE_AGILITY,
    MAX_SELFISH_AGILITY,
    MAX_BASE_INTELLECT,
    MAX_SELFISH_INTELLECT,
    MAX_BASE_POWER,
    MAX_SELFISH_POWER,
    MAX_BASE_STRENGTH,
    MAX_SELFISH_STRENGTH,
    MAX_BASE_WILL,
    MAX_SELFISH_WILL,
    MAX_TOTAL
} from "./util/constants";
import Icon from './components/icon/Icon';
import logo from "./images/gamma.png";
import StatDisplay from "./components/stat-display/StatDisplay";
import StatInput from './components/stat-input/StatInput';
import TabButton from "./components/tabs/TabButton";
import './App.scss';

function App() {
    const [agility, setAgility] = useState(MAX_BASE_AGILITY);
    const [intellect, setIntellect] = useState(MAX_BASE_INTELLECT);
    const [power, setPower] = useState(MAX_BASE_POWER);
    const [strength, setStrength] = useState(MAX_BASE_STRENGTH);
    const [will, setWill] = useState(MAX_BASE_WILL);

    const [page, setPage] = useState("Base");

    const [showWarning, setShowWarning] = useState(true);

    // derive error
    let message, messageClass;
    if (agility + intellect + power + strength + will > MAX_TOTAL) {
        message = "Your stat total is too high!";
        messageClass = "error";
    
    } else if (showWarning) {
        message = "Enter your pet's stats above!";
        messageClass = "warning";
    
    } else {
        message = messageClass = "";
    }

    // on first load, check if warning should be shown
    useEffect(() => {
        const wasWarned = localStorage.getItem("warned");
        if (wasWarned)
            setShowWarning(false);

        localStorage.setItem("warned", "true");
    
    }, []);

    return (
        <div className = "app">
            <div className = "header">
                <img className = "logo" src = {logo} alt = "logo"/>
                Gamma Stats
                <a className = "header-button" href = "https://discord.com/api/oauth2/authorize?client_id=743944201682681937&permissions=354368&scope=bot" target = "_blank" rel = "noreferrer">
                    <Button>
                        <Icon className = "header-icon" icon = "discord" size = "md"/>
                        Add to Discord
                    </Button>
                </a>
            </div>

            <div className = "stat-inputs">
                <StatInput icon = "strength" stat = {strength} setStat = {setStrength} max = {MAX_SELFISH_STRENGTH}/>
                <StatInput icon = "intellect" stat = {intellect} setStat = {setIntellect} max = {MAX_SELFISH_INTELLECT} />
                <StatInput icon = "agility" stat = {agility} setStat = {setAgility} max = {MAX_SELFISH_AGILITY} />
                <StatInput icon = "will" stat = {will} setStat = {setWill} max = {MAX_SELFISH_WILL} />
                <StatInput icon = "power" stat = {power} setStat = {setPower} max = {MAX_SELFISH_POWER} />
            </div>

            <div className = {`message-box ${messageClass}`}>
                {message}
            </div>

            <div className = "stat-displays">
                <StatDisplay page = {page} agility = {agility} intellect = {intellect} power = {power} strength = {strength} will = {will} quadrant = {0}/>
                <StatDisplay page = {page} agility = {agility} intellect = {intellect} power = {power} strength = {strength} will = {will} quadrant = {1}/>
            </div>

            <div className = "stat-displays">
                <StatDisplay page = {page} agility = {agility} intellect = {intellect} power = {power} strength = {strength} will = {will} quadrant = {2}/>
                <StatDisplay page = {page} agility = {agility} intellect = {intellect} power = {power} strength = {strength} will = {will} quadrant = {3}/>
            </div>

            <div className = "tab-buttons">
                <TabButton currentPage = {page} page = "Base" setPage = {setPage}>
                    <Icon icon = "damage" size = "lg"/>
                    Base
                </TabButton>
                <TabButton  currentPage = {page} page = "Rating" setPage = {setPage}>
                    <Icon icon = "crit" size = "lg"/>
                    Rating
                </TabButton>
                <TabButton  currentPage = {page} page = "Health" setPage = {setPage}>
                    <Icon icon = "heart" size = "lg"/>
                    Health
                </TabButton>
                <TabButton  currentPage = {page} page = "Misc" setPage = {setPage}>
                    <Icon icon = "fishluck" size = "lg"/>
                    Misc
                </TabButton>
            </div>
        </div>
    );
}

export default App;