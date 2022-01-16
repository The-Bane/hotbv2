const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k19',
        "description": "Display upgrade information for keep level 19.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_19.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);