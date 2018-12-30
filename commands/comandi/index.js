const commando = require('discord.js-commando');

// a special command triggered sending !roll in discord's channel 
class ComandiCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'comandi',
            group: 'comandi',
            memberName: 'comandi',
            description: 'comandi command for discord bot'
        });
    }
    async run(message, args) {
        console.log(args)
        message.reply(`
!overwatch : tutto quello che serve a Luc
        `);
    }
}

module.exports = ComandiCommand;

