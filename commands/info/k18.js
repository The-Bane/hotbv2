const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k18",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k18'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_18.png");
        message.channel.send({ files: [attachment] });
    },
});