const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'enhancements',
        "description": "Displays what building offers which enhancement.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/Building_Enhancements.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);