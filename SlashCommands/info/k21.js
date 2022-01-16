const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k21',
        "description": "Display upgrade information for keep level 21.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_21.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);