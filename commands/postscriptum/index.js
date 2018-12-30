const commando = require('discord.js-commando');

// a special command triggered sending !roll in discord's channel 
class PostscriptumCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ps',
            group: 'postscriptum',
            memberName: 'postscriptum',
            description: 'postscriptum command for discord bot'
        });
    }
    async run(message, args) {
        console.log(args)
        message.reply(`
Benvenuto nella sezione di Post Scriptum dei BIA. 
I giorni di allenamento sono il **Martedi** e il **Giovedi** dalle ore 21.30.
        
I responsabili sono: @=BIA=kaimano @=BIA=V!rgil   @cowboyfromhell @=BIA=sbrenza @Guastatore9509
        `);
    }
}

module.exports = PostscriptumCommand;

