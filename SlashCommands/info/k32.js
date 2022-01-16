const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k32',
        "description": "Display upgrade information for keep level 32.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_32.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);