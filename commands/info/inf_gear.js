const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "Infantry Gear",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['Infantry Gear', 'inf', 'inf gear'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/Inf_Gear_v3.png");
        message.channel.send({ files: [attachment] });
    },
});