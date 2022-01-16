const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k30',
        "description": "Display upgrade information for keep level 30.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_30.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);