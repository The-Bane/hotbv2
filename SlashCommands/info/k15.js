const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k15',
        "description": "Display upgrade information for keep level 15.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_15.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);