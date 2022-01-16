const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k36",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k36'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/k36.png");
        message.channel.send({ files: [attachment] });
    },
});