const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k11",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k11'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_11.png");
        message.channel.send({ files: [attachment] });
    },
});