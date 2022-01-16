const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k38',
        "description": "Display upgrade information for keep level 38.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/k38.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);