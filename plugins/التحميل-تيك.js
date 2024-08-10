import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args || !args[0]) return conn.reply(m.chat, '🚩 يرجى إدخال رابط الفيديو من تيك توك مع الأمر.\n\n`مثال:`\n' + `> *${usedPrefix + command}* https://vm.tiktok.com/ZMrFCX5jf/`, m)
    if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, 'تأكد من أن الرابط خاص بتيك توك', m).then(_ => m.react('✖️'))
    await m.react('⏳')
    try {
        let { title, author, duration, views, likes, comment, share, published, downloads, dl_url } = await Starlights.tiktokdl(args[0])
        let txt = '`乂  ت ي ك  ت و ك  -  ت حميل`\n\n'
        txt += `    ✩  *العنوان* : ${title}\n`
        txt += `    ✩  *المؤلف* : ${author}\n`
        txt += `    ✩  *المدة* : ${duration} ثانية\n`
        txt += `    ✩  *عدد المشاهدات* : ${views}\n`
        txt += `    ✩  *عدد الإعجابات* : ${likes}\n`
        txt += `    ✩  *عدد التعليقات* : ${comment}\n`
        txt += `    ✩  *عدد المشاركات* : ${share}\n`
        txt += `    ✩  *تاريخ النشر* : ${published}\n`
        txt += `    ✩  *عدد التنزيلات* : ${downloads}\n\n`
        txt += `> 🚩 *${usedPrefix + command}*`
        await conn.sendFile(m.chat, dl_url, 'tiktok.mp4', txt, m)
        await m.react('✅')
    } catch {
        await m.react('✖️')
    }
}
handler.help = ['tiktok *<رابط tt>*']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true

export default handler
