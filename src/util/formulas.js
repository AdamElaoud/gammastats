export const sumData = (formulas, agility, intellect, power, strength, will) => {
    const total =  formulas.reduce((total, formula) => {
        return total + formula(agility, intellect, power, strength, will);
    }, 0);

    return total.toFixed(2);
};

// DAMAGE
export const dealer = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) * 3 / 400;
export const giver = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) / 200;
export const boon = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) / 400;
export const damage = [
    { title: "Dealer", func: dealer, icon: "damage" },
    { title: "Giver", func: giver, icon: "damage" },
    { title: "Boon", func: boon, icon: "damage" },
    { title: "Pain-Giver", func: giver, icon: "damage" },
    { title: "Pain-Bringer", func: boon, icon: "damage" },
    "DAMAGE",
    ["strength", "will"],
    { title:  "Total", funcs: [dealer, giver, boon, giver, boon], icon: "damage" }
];

// RESIST
export const ward = (agility, _, power, strength, __) => ((2 * strength) + (2 * agility) + power) * 3 / 250;
export const proof = (agility, _, power, strength, __) => ((2 * strength) + (2 * agility) + power) / 125;
export const defy = (agility, _, power, strength, __) => ((2 * strength) + (2 * agility) + power) / 250;
export const resist = [
    { title: "Ward", func: ward, icon: "resist" },
    { title: "Proof", func: proof, icon: "resist" },
    { title: "Away", func: defy, icon: "resist" },
    { title: "Spell-Proof", func: proof, icon: "resist" },
    { title: "Spell-Defying", func: defy, icon: "resist" },
    "RESIST",
    ["agility", "strength"],
    { title:  "Total", funcs: [ward, proof, defy, proof, defy], icon: "resist" }
];

// ACCURACY
export const sniper = (agility, intellect, power, _, __) => ((2 * intellect) + (2 * agility) + power) * 3 / 400;
export const shot = (agility, intellect, power, _, __) => ((2 * intellect) + (2 * agility) + power) / 200;
export const eye = (agility, intellect, power, _, __) => ((2 * intellect) + (2 * agility) + power) / 400;
export const accuracy = [
    { title: "Sniper", func: sniper, icon: "accuracy" },
    { title: "Shot", func: shot, icon: "accuracy" },
    { title: "Eye", func: eye, icon: "accuracy" },
    { title: "Sharp-Shot", func: shot, icon: "accuracy" },
    { title: "Sharp-Eye", func: eye, icon: "accuracy" },
    "ACCURACY",
    ["agility", "intellect"],
    { title:  "Total", funcs: [sniper, shot, eye, shot, eye], icon: "accuracy" }
];

// PIERCE
export const breaker = (agility, _, power, strength, __) => ((2 * strength) + (2 * agility) + power) / 400;
export const piercer = (agility, _, power, strength, __) => ((2 * strength) + (2 * agility) + power) * 3 / 2000;
export const pierce = [
    { title: "Armor Breaker", func: breaker, icon: "pierce" },
    { title: "Armor Piercer", func: piercer, icon: "pierce" },
    "PIERCE",
    ["agility", "strength"],
    { title:  "Total", funcs: [breaker, piercer], icon: "pierce" }
];

// CRITICAL
export const assailant = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) / 40;
export const sStriker = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 150; // school striker
export const cStriker = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 125; // critical striker
export const hitter = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 9 / 500;
export const critical = [
    { title: "Assailant", func: assailant, icon: "crit" },
    { title: "Striker", func: sStriker, icon: "crit" },
    { title: "Critical Striker", func: cStriker, icon: "crit" },
    { title: "Critical Hitter", func: hitter, icon: "crit" },
    "CRITICAL",
    ["agility", "will"],
    { title:  "Total", funcs: [assailant, sStriker, cStriker, hitter], icon: "crit" }
];

// BLOCK
export const defender = (_, intellect, power, __, will) => ((2 * intellect) + (2 * will) + power) * 3 / 125;
export const blocker = (_, intellect, power, __, will) => ((2 * intellect) + (2 * will) + power) * 9 / 500;
export const block = [
    { title: "Defender", func: defender, icon: "block" },
    { title: "Blocker", func: blocker, icon: "block" },
    "BLOCK",
    ["intellect", "will"],
    { title:  "Total", funcs: [defender, blocker], icon: "block" }
];

// PIP CONVERSION
export const conserver = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 125;
export const saver = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 9 / 500;
export const pipConversion = [
    { title: "Pip Conserver", func: conserver, icon: "pipconvert" },
    { title: "Pip Saver", func: saver, icon: "pipconvert" },
    "PIP CONVERT",
    ["agility", "will"],
    { title:  "Total", funcs: [conserver, saver], icon: "pipconvert" }
];

// PIP CHANCE
export const pipOPlenty = (_, intellect, power, strength, __) => ((2 * strength) + (2 * intellect) + power) / 250;
export const pipBoost = () => 5;
export const pips = [
    { title: "Pip 'O Plenty", func: pipOPlenty, icon: "pip" },
    { title: "Pip Boost", func: pipBoost, icon: "pip" },
    "PIPS",
    ["intellect", "strength"],
    { title:  "Total", funcs: [pipOPlenty, pipBoost], icon: "pip" }
];

// INCOMING
export const lively = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) * 13 / 2000;
export const healthy = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) * 3 / 1000;
export const incoming = [
    { title: "Lively", func: lively, icon: ["incoming", "heart"] },
    { title: "Healthy", func: healthy, icon: ["incoming", "heart"] },
    "INCOMING",
    ["strength", "will"],
    { title:  "Total", funcs: [lively, healthy], icon: "heart" }
];

// OUTGOING
export const medic = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) * 13 / 2000;
export const healer = (_, __, power, strength, will) => ((2 * strength) + (2 * will) + power) * 3 / 1000;
export const outgoing = [
    { title: "Medic", func: medic, icon: ["outgoing", "heart"]},
    { title: "Healer", func: healer, icon: ["outgoing", "heart"]},
    "OUTGOING",
    ["strength", "will"],
    { title:  "Total", funcs: [medic, healer], icon: ["outgoing", "heart"] }
];

// HEALTH
export const healthBounty = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 25;
export const healthGift = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) / 10;
export const healthBoost = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 6 / 75;
export const add = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 50;
export const health = [
    { title: "Health Bounty", func: healthBounty, icon: "health" },
    { title: "Health Gift", func: healthGift, icon: "health" },
    { title: "Health Boost", func: healthBoost, icon: "health" },
    { title: "Health Add", func: add, icon: "health" },
    "HEALTH",
    ["agility", "will"],
    { title:  "Total", funcs: [healthBounty, healthGift, healthBoost, add], icon: "health" }
];

// MANA
export const manaBounty = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) / 10;
export const manaGift = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 6 / 75;
export const manaBoost = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) * 3 / 50;
export const extra = (agility, _, power, __, will) => ((2 * agility) + (2 * will) + power) / 25;
export const mana = [
    { title: "Mana Bounty", func: manaBounty, icon: "mana" },
    { title: "Mana Gift", func: manaGift, icon: "mana" },
    { title: "Mana Boost", func: manaBoost, icon: "mana" },
    { title: "Extra Mana", func: extra, icon: "mana" },
    "MANA",
    ["agility", "will"],
    { title:  "Total", funcs: [manaBounty, manaGift, manaBoost, extra], icon: "mana" }
];

// STUN RESIST
export const recalcitrant = (_, intellect, power, strength, __) => ((2 * strength) + (2 * intellect) + power) / 125;
export const resistant = (_, intellect, power, strength, __) => ((2 * strength) + (2 * intellect) + power) / 250;
export const stunResist = [
    { title: "Stun Recalcitrant", func: recalcitrant, icon: "stunresist" },
    { title: "Stun Resistant", func: resistant, icon: "stunresist" },
    "STUN RESIST",
    ["intellect", "strength"],
    { title:  "Total", funcs: [recalcitrant, resistant], icon: "stunresist" }
];

// FISH LUCK
export const epicLuck = (_, intellect, power, __, will) => ((2 * intellect) + (2 * will) + power) / 400;
export const luck = (_, intellect, power, __, will) => ((2 * intellect) + (2 * will) + power) / 400;
export const fishLuck = [
    { title: "Epic Fish Luck", func: epicLuck, icon: "fishluck" },
    { title: "Fish Luck", func: luck, icon: "fishluck" },
    "FISH LUCK",
    ["intellect", "will"],
    { title:  "Total", funcs: [epicLuck, luck], icon: "fishluck" }
];
