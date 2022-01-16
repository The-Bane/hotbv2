const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k31',
        "description": "Display upgrade information for keep level 31.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_31.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);