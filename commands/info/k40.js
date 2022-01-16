const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k40",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k40'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/k40.png");
        message.channel.send({ files: [attachment] });
    },
});