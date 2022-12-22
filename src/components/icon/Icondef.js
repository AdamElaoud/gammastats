import {
    faCalendarDays,
    faCaretDown,
    faCaretUp,
    faCompress,
    faEllipsisVertical,
    faExpand,
    faEye,
    faEyeSlash,
    faFire,
    faLeaf,
    faListCheck,
    faPlus,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTrello } from "@fortawesome/free-brands-svg-icons";
import accuracy from "../../images/accuracy.png";
import agility from "../../images/agility.png";
import block from "../../images/block.png";
import crit from "../../images/crit.png";
import damage from "../../images/damage.png";
import fishluck from "../../images/fishluck.png";
import health from "../../images/health.png";
import heart from "../../images/heart.png";
import incoming from "../../images/incoming.png";
import intellect from "../../images/intellect.png";
import life from "../../images/life.png";
import mana from "../../images/mana.png";
import outgoing from "../../images/outgoing.png";
import pierce from "../../images/pierce.png";
import pip from "../../images/pip.png";
import pipconvert from "../../images/pipconvert.png";
import power from "../../images/power.png";
import resist from "../../images/resist.png";
import strength from "../../images/strength.png";
import stunresist from "../../images/stunresist.png";
import will from "../../images/will.png";

export const FontAwesomeIconDefs = {
    "calendar": faCalendarDays,
    "checkList": faListCheck,
    "collapse": faCompress,
    "dashboard": faTrello,
    "discord": faDiscord,
    "down": faCaretDown,
    "expand": faExpand,
    "eye": faEye,
    "eyeSlashed": faEyeSlash,
    "fire": faFire,
    "leaf": faLeaf,
    "plus": faPlus,
    "profile": faUser,
    "tripleDot": faEllipsisVertical,
    "up": faCaretUp
};

export const ImageIconDefs = {
    accuracy,
    agility,
    block,
    crit,
    damage,
    fishluck,
    health,
    heart,
    incoming,
    intellect,
    life,
    mana,
    outgoing,
    pierce,
    pip,
    pipconvert,
    power,
    resist,
    strength,
    stunresist,
    will
};

export default { FontAwesomeIconDefs, ImageIconDefs }; // eslint-disable-line