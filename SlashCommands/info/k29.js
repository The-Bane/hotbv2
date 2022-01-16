const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k29',
        "description": "Display upgrade information for keep level 29.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_29.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);