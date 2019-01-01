const commando = require('discord.js-commando');

// a special command triggered sending !pubg in discord's channel 
class PubgCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pubg',
            group: 'pubg',
            memberName: 'pubg',
            description: 'Pubg command'
        });
    }
    async run(message, args) {
        console.log(args)
        message.reply(`
                      La sezione =BIA= PUBG è strutturata come segue:
                        *-Ogni martedì e mercoledì organizziamo partite in nostri server privati
                        *-Al momento stiamo cercando di creare dei team competitivi per partecipare a tornei nazionali e internazionali 
                        *-Responsabili:* @=BIA= Corny, @=BIA= Audax, @=BIA= Mephisto
        
                      `);
    }
}

module.exports = PubgCommand;

