const { Command } = require("reconlx");
const { MessageAttachment } = require("discord.js");

module.exports = new Command(
    {
        "name": 'elk',
        "description": "Display level locations of elk creatures for events.",
        
        run: async ({ interaction }) => {
            const attachment = new MessageAttachment("assets/Elk_chart.png");
            interaction.followUp({ files: [ attachment ] });                        
        },             
    },
);