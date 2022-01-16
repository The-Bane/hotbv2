const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k12',
        "description": "Display upgrade information for keep level 12.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_12.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);