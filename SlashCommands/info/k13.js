const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k13',
        "description": "Display upgrade information for keep level 13.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_13.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);