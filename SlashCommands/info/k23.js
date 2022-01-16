const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k23',
        "description": "Display upgrade information for keep level 23.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_23.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);