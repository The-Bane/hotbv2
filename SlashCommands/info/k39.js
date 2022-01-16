const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k39',
        "description": "Display upgrade information for keep level 39.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/k39.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);