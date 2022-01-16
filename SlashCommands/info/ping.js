const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "ping",
    description: "Returns websocket ping.",
    type: 'CHAT_INPUT',

    run: async ({ client, interaction }) => {
        interaction.followUp({ content: `PONG BITCH!!!\n${client.ws.ping}ms!` });
    },
});