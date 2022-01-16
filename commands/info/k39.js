const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k39",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k39'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/k39.png");
        message.channel.send({ files: [attachment] });
    },
});