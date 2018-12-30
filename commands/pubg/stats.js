const commando = require('discord.js-commando');

// a special command triggered sending !overwatch in discord's channel 
class OverwatchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pubg',
            group: 'pubg',
            memberName: 'pubg',
            description: 'Dice Roll'
        });
    }
    async run(message, args) {
        console.log(args)
        message.reply("hai chiesto le statistiche");
    }
}

module.exports = OverwatchCommand;

