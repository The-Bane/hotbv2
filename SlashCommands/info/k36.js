const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k36',
        "description": "Display upgrade information for keep level 36.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/k36.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);