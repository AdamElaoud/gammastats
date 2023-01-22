export const MAX_BASE_AGILITY = 260;
export const MAX_BASE_INTELLECT = 250;
export const MAX_BASE_POWER = 250;
export const MAX_BASE_STRENGTH = 255;
export const MAX_BASE_WILL = 260;

export const MAX_SELFISH_BOOST = 260; // highest selfish grant: +65 +50 +40 +40 +40 +25 = +260
export const MAX_TOTAL = MAX_BASE_AGILITY + MAX_BASE_INTELLECT + MAX_BASE_POWER + MAX_BASE_STRENGTH + MAX_BASE_WILL + 65 + 65 + 65 + 65 + 65 + 50;

export const MAX_SELFISH_AGILITY = MAX_BASE_AGILITY + MAX_SELFISH_BOOST;
export const MAX_SELFISH_INTELLECT = MAX_BASE_INTELLECT + MAX_SELFISH_BOOST;
export const MAX_SELFISH_POWER = MAX_BASE_POWER + MAX_SELFISH_BOOST;
export const MAX_SELFISH_STRENGTH = MAX_BASE_STRENGTH + MAX_SELFISH_BOOST;
export const MAX_SELFISH_WILL = MAX_BASE_WILL + MAX_SELFISH_BOOST;

export const DISCORD_BOT_INVITE_LINK = "https://discord.com/api/oauth2/authorize?client_id=743944201682681937&permissions=139586792512&scope=applications.commands%20bot";