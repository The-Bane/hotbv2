const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k16',
        "description": "Display upgrade information for keep level 16.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_16.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);