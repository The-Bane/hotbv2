const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k40',
        "description": "Display upgrade information for keep level 40.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/k40.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);