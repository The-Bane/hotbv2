const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k11',
        "description": "Display upgrade information for keep level 11.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_11.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);