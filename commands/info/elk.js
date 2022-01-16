const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "elk",
    description: "Return image of requested.",
    aliases: ['elk'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/Elk_chart.png");
        message.channel.send({ files: [attachment] });
    },
});