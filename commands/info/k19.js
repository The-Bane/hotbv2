const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k19",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k19'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_19.png");
        message.channel.send({ files: [attachment] });
    },
});