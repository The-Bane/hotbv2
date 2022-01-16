const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'infgear',
        "description": "Display recommended V3 infantry gear setups.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/Inf_Gear_v3.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);