const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'rangedgear',
        "description": "Display V3 Best Ranged Gear.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/Ranged_v3.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);