const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "ranged gear",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['ranged', 'ranged gear'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/Ranged_v3.png");
        message.channel.send({ files: [attachment] });
    },
});