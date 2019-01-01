require('dotenv').config()
const commando = require('discord.js-commando');
const bot = new commando.Client();

// This will register your 'random' group
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('pubg', 'Pubg');
bot.registry.registerGroup('overwatch', 'Overwatch');
bot.registry.registerGroup('postscriptum', 'Postscriptum');
bot.registry.registerGroup('comandi', 'Comandi');
// This registers a group of default commands such as 'help' which will 
// send a private message to users with all the available commands when asked.
bot.registry.registerDefaults();
// This registers the folder where all of your command files are stored
bot.registry.registerCommandsIn(__dirname + "/commands");

// This action is triggered as soon as a new member join the server
bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    // 526701289174859786 stands for accoglienza-bia
    bot.channels.get(process.env.CHANNEL_ID).send(`Benvenuto ${member.user}! Questo e' il canale discord ufficiale del Clan BIA. Per sapere come unirti consulta il nostro regolamento all'indirizzo: https://www.biaclan.it/arruolati-adesso/ 

Scrivi in chat **'!comandi'** per avere informazioni su tutti i comandi disponibili
    `).catch(console.error);
    
    bot.channels.get(process.env.ADMIN_ID).send(`@here ${member.user} si e' unito. Ci sta qualcuno per accoglierlo?`).catch(console.error);
});



//  the bot notify the admins if a user leave
bot.on("guildMemberRemove", member => {
    let guild = member.guild;
    bot.channels.get(process.env.ADMIN_ID).send(`${member.user} Ha abbandonato il server`).catch(console.error);
});






// Demo action to show links
bot.on('message', (message => {
    if(message.content == 'link reclutamento') {
        message.reply(`Questo e' il canale discord ufficiale del Clan BIA. Per sapere come unirti consulta il nostro regolamento all'indirizzo: https://www.biaclan.it/arruolati-adesso/`);
    }
}));


// censorship on bad language
bot.on('message', (message => {

    var forbiddenWords = [
        'cazzo', 'porco', 'puttana', 'ebreo', 'negro', 'stronzo', 'porca', 
        'madonna', 'dio', 'gesu', 'coglione', 'troia', 'vaffanculo'
    ] 
    

    if (forbiddenWords.some(word => message.content.includes(word))) {
        message.delete();
        message.reply('Hai utilizzato un linguaggio poco consono. Prossima volta moderati')
    }

    if (forbiddenWords.some(word => message.content.includes(word.toUpperCase()))) {
        message.delete();
        message.reply('Hai utilizzato un linguaggio poco consono. Prossima volta moderati')
    }
}));


bot.on('message', (message => {

    if (message.author.id == process.env.BOT_ID) {
        return
    }

    var botIdentity = [
        'bot'
    ] 

    var replies = [
        'Ma cercavi proprio me? :heart_eyes: ',
        ':see_no_evil: eccomi!!!',
        ':robot: Mi hai chiamato? :robot: :robot: :robot: '
    ]

    if (botIdentity.some(word => message.content.includes(word))) {
        message.reply(replies[Math.floor(Math.random()*replies.length)])
        message.reply('Ricordati di usare **!comandi** per sapere che in modo posso esserti utile')
    }
}));




// This action is triggered when one of those keyword is found in the message content
bot.on('message', (message) => {
    // split the message in strings to be matched
    arr = message.content.split(" ")

    if (message.author.id == process.env.BOT_ID) {
        return
    }

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
