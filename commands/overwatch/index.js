const commando = require('discord.js-commando');

// a special command triggered sending !roll in discord's channel 
class PubgStatsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'overwatch',
            group: 'overwatch',
            memberName: 'overwatch',
            description: 'Overwatch command for discord bot'
        });
    }
    async run(message, args) {
        console.log(args)
        message.reply(`
La sezione di overwatch dei BIA e' cosi strutturata:
- pippo
- pippa

I giorni di allenamento sono il Martedi e il Giovedi (esclusi i giorni in cui fanno Don Matteo alla TV)
        
I responsabili sono: Tizio, Caio e Sempronio, <@Luc1#7992> <@7992> @Luc1
        `);
    }
}

module.exports = PubgStatsCommand;

