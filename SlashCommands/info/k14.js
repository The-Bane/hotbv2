const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k14',
        "description": "Display upgrade information for keep level 14.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_14.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);