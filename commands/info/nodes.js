const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command({
    name: "nodes",
    description: "Return image of request.",
    aliases: ['nodes', 'strategic terrain'],

    run: async (client, message ) => {
        const attachment = new MessageAttachment("assets/nodes.png");
        message.channel.send({ files: [attachment] });
    },
});