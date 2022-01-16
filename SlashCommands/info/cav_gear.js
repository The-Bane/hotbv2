const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'cavgear',
        "description": "Display recommended V3 cavalry gear setups.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/Cav_Gear_v3.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);