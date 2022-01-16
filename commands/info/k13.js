const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "k13",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['k13'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/keep_13.png");
        message.channel.send({ files: [attachment] });
    },
});