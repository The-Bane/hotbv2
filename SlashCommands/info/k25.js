const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k25',
        "description": "Display upgrade information for keep level 25.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_25.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);