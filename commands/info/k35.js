const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k35",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k35'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_35.png");
        message.channel.send({ files: [attachment] });
    },
});