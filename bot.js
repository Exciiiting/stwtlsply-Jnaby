
const Discord = require("discord.js")
const client = new Discord.Client();


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});





const adminprefix = "-";
const developers = ['323160008411971585'];

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : `)
})

var prefix = "-"
client.on('message', function(message) {
    const myID = "505761472232816641";
   let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "st")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Your Status** : `Streaming`').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "ply")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send('**Your Status** : `Playing`').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
} else if(message.content.startsWith(prefix + "ls")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Your Status** : `Listening`').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "wt")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Your Status** : `Watching`').then(msg => {
           msg.delete(500);
          message.delete(500);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(500);
          message.delete(500);
        });
    }
});








client.login(process.env.BOT_TOKEN); 
