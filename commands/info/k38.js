const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k38",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k38'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/k38.png");
        message.channel.send({ files: [attachment] });
    },
});