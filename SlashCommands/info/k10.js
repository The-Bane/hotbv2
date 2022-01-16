const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k10',
        "description": "Display upgrade information for keep level 10.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_10.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);