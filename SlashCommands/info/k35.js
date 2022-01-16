const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k35',
        "description": "Display upgrade information for keep level 35.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_35.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);