const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k37',
        "description": "Display upgrade information for keep level 37.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/k37.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);