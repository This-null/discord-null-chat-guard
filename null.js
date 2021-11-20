const Discord = require("discord.js")     
const client = new Discord.Client();       
const config = require("./ayarlar.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);    
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.on('message', function() {
  { 
   var interval = setInterval (function () {
     process.exit(0);
   }, 1 * 18000000); 
 }
});

const acarkre = require('acarkre');
acarkre(client, {
 konsolBilgi: true,
 küfürEngel: true,
 reklamEngel: true,
 uyarıMesajı: false, 
 izinliKanallar: [],
 izinliRoller: [],
 kufurUyariMesaj: "küfür etme", 
 reklamUyariMesaj: "link atma"
});

client.login(config.token).catch(err => console.error("Token bozuk yarram git değiş."));
