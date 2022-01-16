const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'nodes',
        "description": "Display locations of specific level strategic terrain.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/nodes.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);