const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config");

function antwoorden() {
    var rand = ['Jaa', 'Nee..', 'Wat denk jij wel niet..', 'WTF', 'Misschien.. ;)', 'Vraag dat lekker aan iemand anders!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on('message', msg => {
    if(msg.content.startsWith(config.prefix + "misticvraag")) {
        msg.channel.send(antwoorden())
    }
});

client.login(config.token)
client.on("message", message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
if(message.content.startsWith(config.prefix + "MisticSay")) {
    if(!message.member.roles.some(r=>["⚙️ | Management"].includes(r.name)) )
  return message.reply("Dit commando is niet voor jou bedoelt!");
  let profmsg = args.slice(2).join(" ");
  let nieuwtje = args[1]
  message.channel.send({embed: {
    color: 0xeb5ef7,
    title: nieuwtje + ":",
    description: profmsg + "\n \n**Geschreven door:**\n" + message.author,
    timestamp: new Date(),
    footer: {
      text: "© MisticSprings"
    }
  }
});
}
});

client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    const saymessage = args.slice(2).join(" ");
    if(message.content.startsWith(config.prefix + "warn")) {
    message.channel.send(":warning:️ **Oei oei, " + member + " is niet zo lief geweest!** :warning:️\n\n`Dit is een waarschuwing wegens:`\n\n" + saymessage + ":exclamation:️")
}
});

client.on("message", message => {
 if(message.content.match("http")) {
    message.delete().catch(O_o=>{});
 }
});

client.on("message", message => {
    if(message.content.toLocaleLowerCase().match("kut")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("kanker")) { 
        message.delete().catch(O_o=>{});
    }   
    if(message.content.toLocaleLowerCase().match("fuck")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("fack")) {
          message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("facking")) {
          message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("kker")) {
        message.delete().catch(O_o=>{});
    } 
    if(message.content.toLocaleLowerCase().match("tering")) {
        message.delete().catch(O_o=>{});
    }   
    if(message.content.toLocaleLowerCase().match("tyfus")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("thyfus")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("hoer")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("jood")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("homo")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("autist")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("pik")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("aids")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("piem")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("penis")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("penus")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("mongo")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("pijpen")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("pijper")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("gay")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("pauper")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("anus")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("kak")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("neuk")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("fap")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("takkenwijf")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("fak")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("val dood")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("pedo")) {
        message.delete().catch(O_o=>{});
    }
    if(message.content.toLocaleLowerCase().match("trut")) {
       message.delete().catch(O_o=>{});
    }
   });

   function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefix = "!";

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

if (message.content.toLowerCase().startsWith(prefix + `nieuw`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`Je hebt op dit moment al een ticket open!`);
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.find("name", "✔️ | Support", "🔰  | Moderator", "⚙️ | Management", "⚙️ | Management +", "🎩 | Eigenaar");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Je ticket is gemaakt, #${c.name}.`);
        const embed = new discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Je hebt een ticket geopend! Probeer zo goed mogelijk uit te leggen waarom je deze ticket hebt geopend. Onze Support zal je dan zo snel mogelijk helpen.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `sluit`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Je kan het ticket niet sluiten als je niet in de channel van de ticket zit!`);

    message.channel.send(`Weet je het zeker? Deze actie kan niet ongedaan worden gemaakt!\nAls je het zeker weet typ \`!ikweethetzeker\`. Na 10 seconde word dit geanuleerd en zal dit ticket niet verwijderd worden.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!ikweethetzeker', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Je hebt geen !ikweethetzeker getypt, het ticket word niet gesloten.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on("guildMemberAdd", member => {
    member.addRole("456895151802155009");
});

client.on('message', msg => {
    if(msg.content.startsWith(config.prefix + "ip")) {
        msg.channel.send("play.misticsprings.nl")
    }
});

