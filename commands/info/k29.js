const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k29",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k29'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_29.png");
        message.channel.send({ files: [attachment] });
    },
});