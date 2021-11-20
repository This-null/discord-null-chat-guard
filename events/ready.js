const Discord = require("discord.js");
const config = require('../ayarlar.js');
module.exports = async client => {
  setInterval(() => {
    const farklı = Math.floor(Math.random() * (config.rasgele.length));
    client.user.setActivity(`${config.rasgele[farklı]}`, {type: "LISTENING"});
}, 10000);
client.user.setStatus("idle");
let sesKanali = client.channels.cache.get(config.sesKanaliID);
if (sesKanali) sesKanali.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
console.log(`${client.user.tag} olarak giriş yapıldı.`);

};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

