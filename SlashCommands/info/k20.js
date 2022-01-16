const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k20',
        "description": "Display upgrade information for keep level 20.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_20.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);