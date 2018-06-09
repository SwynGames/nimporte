const Discord = require('discord.js')

const bot = new Discord.Client()

var PREFIX = ("*")

bot.login(process.env.TOKEN)


bot.on ('message', message => {
    if (message.content === PREFIX + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#4403A3')
        .addField("Commande du Bot !!", "   *help : Affiche les commandes du Bot")
        message.channel.sendEmbed(help_embed);
        console.log("Commande help demandée");
    }
})

const low = require('lowdb')
const FileSwync = require('lowdb/adapters/FileSync')

const adapter = new FileSwync('database.json')
const db = low(adapter)

db.defaults({histoires: []})
  .write()

bot.on('message', message => {
    if (message.content.startsWith(prefix))return;
    var args = message.content.substring(prefix.lenght).split("");
    var PREFIX = ("*");

    switch (args[0].toLowerCase()){

        case "newstory":
        var value = message.content.substr(10);
        var author = message.author.id;
        console.log(value)
        message.reply("ajout de l'histoire a la bse de données")

        db.get('histoires')
        .push({id:number +1, story_value: value,story_author:author})
        .write();
        break;

    }
})

