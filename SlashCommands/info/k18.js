const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k18',
        "description": "Display upgrade information for keep level 18.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_18.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);