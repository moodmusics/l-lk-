const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("#00ffe5")
.setTitle("Yardım Menüsü")
.setAuthor("MoodOnMusic", `https://media.discordapp.net/attachments/743164069938200650/821673251649617930/CC_20210317_121433.png`)
.setThumbnail(`https://media.discordapp.net/attachments/743164069938200650/821673251649617930/CC_20210317_121433.png`)
.setDescription("• **:çal** *Müzik ismi veya bağlantısı* \n `Açıklama: Müzik oynatmak için kullanılır.` \n \n • **:çalanşarkı** \n `Açıklama: Şuanda oynatılan şarkıyı gösterir.` \n \n • **:duraklat** \n `Açıklama: Oynatılan şarkıyı durdurur.` \n \n • **:devamet** \n `Açıklama: Durdurulan şarkıyı devam ettirir.` \n \n • **:geç** \n `Açıklama: Bir müziği dinlemek istemediğinizde bu komut ile geçebilirsiniz.` \n \n • **:kuyruk** \n `Açıklama: Açılan tüm şarkıların sırasını gösterir.` \n \n • **:bot-bilgi** \n `Kullanım: Bot istatistiklerine erişmek için kullanılır.` \n \n • **:ayrıl** \n `Kullanım: Müzik dinlemeyi bırakmak için kullanılır.` \n  [Bot Daveti](https://discord.com/oauth2/authorize?client_id=760745375673352202&scope=bot&permissions=36701184) | [Sunucumuz](https://discord.gg/5tEexFazvR) |   [Oy vermek için tıkla!](https://top.gg/bot/760745375673352202)")
.setImage("https://cdn.discordapp.com/attachments/743164069938200650/821678956562481152/SPONSOR_ARANIYOR.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'m/yardım'
}