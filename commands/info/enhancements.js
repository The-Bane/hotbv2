const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "enhancements",
    description: "Return image of for requested.",
    aliases: ['enhancements'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/Building_Enhancements.png");
        message.channel.send({ files: [attachment] });
    },
});