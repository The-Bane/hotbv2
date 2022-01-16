const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "Cavalry Gear",
    description: "Return image of upgrade requirements for requested keep level.",
    aliases: ['Cavalry Gear', 'Cav', 'Cav Gear'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/Cav_Gear_v3.png");
        message.channel.send({ files: [attachment] });
    },
});