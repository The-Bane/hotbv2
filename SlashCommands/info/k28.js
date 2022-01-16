const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k28',
        "description": "Display upgrade information for keep level 28.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_28.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);