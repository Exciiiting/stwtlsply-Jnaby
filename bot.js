
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

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`*Your Status* : ** ${argresult}**`) 
 } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`*Your Status* : ** ${argresult}**`)    
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`*Your Status* : **  ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`*Your Status* : **   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`*Your Status* : ** ..${argresult} **`)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`*Your Status* : **..${argresult} : `);
}
});






client.login(process.env.BOT_TOKEN); 
