const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('#80ffd9')
    .setTitle('İstatistik;')
    .setThumbnail(`https://media.discordapp.net/attachments/743164069938200650/821673251649617930/CC_20210317_121433.png`)
    .setAuthor("MoodOnMusic", `https://media.discordapp.net/attachments/743164069938200650/821673251649617930/CC_20210317_121433.png`)
    .addField("• **Botun Yapımcısı**", "<@611982405061836810>")
    //.addField("• **Botun Yapımcısı**", "<@613351692381192227>")
    .addField("• **Ekip Üyeleri**", "<@265072701171957760> <@591907491366043649>")
    //.addField("• **Destekçi** ","<@381457867213111296>")
    .addField('• `Kullanıcılar:`', client.users.cache.size)
    .addField('• `Kanallar:`', client.channels.cache.size)
    .addField('• `Sunucular:`', client.guilds.cache.size)
    .addField('• `Kütüphane:`', `Discord.js`)
    .addField(`• discord.js sürümü:`, Discord.version)
    .addField("**• Bot Davet**", " [Davet Etmek için Tıkla](https://discord.com/oauth2/authorize?client_id=760745375673352202&scope=bot&permissions=36701184)", )
    .addField("**• Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/5tEexFazvR)", )
    .addField("**• Top.gg**", " [Oy vermek için tıkla!](https://top.gg/bot/760745375673352202)", )
   // .addField("**<:menu:742711904560087152> Web Sitemiz**", "[Sitemiz](http://moodonmusic.epizy.com)")
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i', 'bot-bilgisi', 'botbilgisi','tanıt','Tanıt'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};