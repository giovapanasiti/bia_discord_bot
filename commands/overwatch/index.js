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
La sezione =BIA= Overwatch è strutturata come segue:

*-Team Competitivo:* team composto dai player che mettono tutto l'impegno ,tempo e  capacità per ottenere risultati a livello  personale e di clan, il team si allena 3 giorni a settimana, gli allenamenti sono su temi specifici e a volte si tratta di più la teoria che la pratica. Si fa spesso uso di coach o VOD review. Il fine ultimo del team sono quello di partecipare alle SCRIM/Tornei per confrontarsi con altri giocatori organizzati di altre community. Il team accetta richieste di farne parte dagli effettivi  del clan e della sezione, seguirà un periodo di analisi e di prova, se vi sarà esito positivo da parte dei responsabili il giocatore ne potrà a far parte.
        
*-Sezione standard:* la sezione standard si compone da coloro che vogliono principalmente migliorare nel gioco senza rinunciare a momenti di divertimento senza pressioni o che non hanno molto tempo da investire, si compone di allenamenti più pratici e si si punta ad avere una conoscenza minima del gioco e delle sue dinamiche. Sono previste anche partite in ranked di gruppo o scalate in piccole formazioni. Sono previsti allenamenti congiunti al team competitivo.
        
*-Giorni di allenamento:* da definire
        
*-Responsabili:* Dragonfire(quando sarà su discord), @=BIA= Luc1 , lupo(quando ci verrà su discord), @=BIA= Odhinn  / @=BIA= Odhinn
        `);
    }
}

module.exports = PubgStatsCommand;

