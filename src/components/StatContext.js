import { createContext, useContext, useState } from 'react';

const StatContext = createContext();

export function StatProvider(props) {
    const [agility, setAgility] = useState(0);
    const [intellect, setIntellect] = useState(0);
    const [power, setPower] = useState(0);
    const [strength, setStrength] = useState(0);
    const [will, setWill] = useState(0);

    const value = {
        agility,
        setAgility,
        intellect,
        setIntellect,
        power,
        setPower,
        strength,
        setStrength,
        will,
        setWill
    };

    return (
        <StatContext.Provider value = {value}>
            {props.children}
        </StatContext.Provider>
    );
}

export function useStatContext() {
    const context = useContext(StatContext);

    if (!context)
        throw new Error("useStatContext must be used within a StatProvider!");

    return context;
}