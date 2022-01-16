const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k33",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k33'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_33.png");
        message.channel.send({ files: [attachment] });
    },
});