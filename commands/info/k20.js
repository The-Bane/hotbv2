const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k20",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k20'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_20.png");
        message.channel.send({ files: [attachment] });
    },
});