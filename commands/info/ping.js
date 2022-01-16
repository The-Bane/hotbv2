const { Command } = require("reconlx");

module.exports = new Command({
    name: "ping",
    aliases: ['p'],

    run: async (client, message, args) => {
        message.channel.send(`PONG!!!\n${client.ws.ping} ws ping`);
    },
});