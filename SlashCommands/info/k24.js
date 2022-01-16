const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k24',
        "description": "Display upgrade information for keep level 24.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_24.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);