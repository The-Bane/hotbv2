const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k22',
        "description": "Display upgrade information for keep level 22.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_22.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);