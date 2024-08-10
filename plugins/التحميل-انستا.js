import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return conn.reply(m.chat, '🚩 يرجى إدخال رابط الفيديو من إنستغرام مع الأمر.\n\n`مثال:`\n' + `> *${usedPrefix + command}* https://www.instagram.com/p/C60xXk3J-sb/?igsh=YzljYTk1ODg3Zg==`, m)
    await m.react('⏳')
    try {
        let { dl_url } = await Starlights.igdl(args[0])
        await conn.sendFile(m.chat, dl_url, 'igdl.mp4', 'تم التحميل بنجاح', m)
        await m.react('✅')
    } catch {
        await m.react('✖️')
    }
}
handler.help = ['instagram *<رابط ig>*']
handler.tags = ['downloader']
handler.command = /^(انستا|instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i

export default handler
