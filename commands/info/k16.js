const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k16",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k16'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_16.png");
        message.channel.send({ files: [attachment] });
    },
});