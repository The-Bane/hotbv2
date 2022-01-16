const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k34',
        "description": "Display upgrade information for keep level 34.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_34.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);