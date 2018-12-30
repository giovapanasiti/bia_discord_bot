require('dotenv').config()
const commando = require('discord.js-commando');
const bot = new commando.Client();

// This will register your 'random' group
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('pubg', 'Pubg');
bot.registry.registerGroup('overwatch', 'Overwatch');
bot.registry.registerGroup('comandi', 'Comandi');
// This registers a group of default commands such as 'help' which will 
// send a private message to users with all the available commands when asked.
bot.registry.registerDefaults();
// This registers the folder where all of your command files are stored
bot.registry.registerCommandsIn(__dirname + "/commands");

// This action is triggered as soon as a new member join the server
bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Benvenuto ${member.user}! Questo e' il canale discord ufficiale del Clan BIA. Per sapere come unirti consulta il nostro regolamento all'indirizzo: https://www.biaclan.it/arruolati-adesso/ 

Scrivi in chat '!comandi' per avere informazioni su tutti i comandi disponibili
    `).catch(console.error);
  });

// Demo action to show links
bot.on('message', (message => {
    if(message.content == 'link reclutamento') {
        message.reply(`Questo e' il canale discord ufficiale del Clan BIA. Per sapere come unirti consulta il nostro regolamento all'indirizzo: https://www.biaclan.it/arruolati-adesso/`);
    }
}));

// This action is triggered when one of those keyword is found in the message content
bot.on('message', (message) => {
    // split the message in strings to be matched
    arr = message.content.split(" ")

    if (arr.indexOf('arruolarmi') >= 0  ) {
        message.reply('per arruolarti vai qui');
    } 

    if (arr.indexOf('arruolarmi?') >= 0  ) {
        message.reply('per arruolarti vai qui');
    } 

    if (arr.indexOf('arruolamento') >= 0  ) {
        message.reply('per arruolarti vai qui');
    } 

    if (arr.indexOf('partecipare') >= 0  ) {
        message.reply('per arruolarti vai qui');
    } 

    if (arr.indexOf('unirmi') >= 0  ) {
        message.reply('per arruolarti vai qui');
    }
});

bot.login(process.env.TOKEN);
