import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, '🚩 يرجى إدخال نص مع الأمر.\n\n`مثال:`\n' + `> *${usedPrefix + command}* Ai Hoshino Edit`, m)
  await m.react('⏳')
  try {
    let { title, author, duration, views, likes, comments_count, share_count, download_count, published, dl_url } = await Starlights.tiktokvid(text)

    let txt = '`乂  ت ي ك  ت و ك  -  ت حميل`\n\n'
    txt += `    ✩  *العنوان* : ${title}\n`
    txt += `    ✩  *المؤلف* : ${author}\n`
    txt += `    ✩  *المدة* : ${duration} ثانية\n`
    txt += `    ✩  *عدد المشاهدات* : ${views}\n`
    txt += `    ✩  *عدد الإعجابات* : ${likes}\n`
    txt += `    ✩  *عدد التعليقات* : ${comments_count}\n`
    txt += `    ✩  *عدد المشاركات* : ${share_count}\n`
    txt += `    ✩  *تاريخ النشر* : ${published}\n`
    txt += `    ✩  *عدد التنزيلات* : ${download_count}\n\n`
    txt += `> 🚩 ${text}`

    await conn.sendFile(m.chat, dl_url, `thumbnail.mp4`, txt, m)
    await m.react('✅')

  } catch {
    await m.react('✖️')
  }
}

handler.help = ['tiktokvid *<بحث>*']
handler.tags = ['downloader']
handler.command = ['تيك2', 'tiktokvid']
//handler.register = true

export default handler
