
const { Client, Collection } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGES",
    ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection;
//client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

//login
client.login(process.env.TOKEN);