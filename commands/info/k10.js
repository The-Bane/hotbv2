const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k10",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k10'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_10.png");
        message.channel.send({ files: [attachment] });
    },
});