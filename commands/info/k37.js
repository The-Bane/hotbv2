const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k37",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k37'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/k37.png");
        message.channel.send({ files: [attachment] });
    },
});