const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'k27',
        "description": "Display upgrade information for keep level 27.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/keep_27.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);