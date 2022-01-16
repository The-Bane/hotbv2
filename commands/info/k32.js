const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k32",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k32'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_32.png");
        message.channel.send({ files: [attachment] });
    },
});