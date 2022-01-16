const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k26',
        "description": "Display upgrade information for keep level 26.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_26.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);