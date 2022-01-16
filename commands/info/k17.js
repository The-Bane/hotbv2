const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k17",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k17'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_17.png");
        message.channel.send({ files: [attachment] });
    },
});