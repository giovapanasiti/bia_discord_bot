const commando = require('discord.js-commando');

// a special command triggered sending !roll in discord's channel 
class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Dice Roll'
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("hai chiesto un numero random da 1 a 6. Eccolo: " + roll);
    }
}

module.exports = DiceRollCommand;

