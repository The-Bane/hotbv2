const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k33',
        "description": "Display upgrade information for keep level 33.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_33.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);