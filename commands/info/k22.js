const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k22",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k22'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_22.png");
        message.channel.send({ files: [attachment] });
    },
});