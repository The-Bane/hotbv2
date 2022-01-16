const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k23",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k23'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_23.png");
        message.channel.send({ files: [attachment] });
    },
});