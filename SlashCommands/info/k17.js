const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k17',
        "description": "Display upgrade information for keep level 17.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_17.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);