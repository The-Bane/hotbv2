const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k26",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k26'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_26.png");
        message.channel.send({ files: [attachment] });
    },
});