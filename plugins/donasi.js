import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/7bb968654d804df83cc81.jpg'
let name = await conn.getName(m.sender)
let but1 = '๐๐๐๐๐'
let bit = usedPrefix + 'owner'
let donasi = `โถ แดแดแดแดษดษข แดแดสแดs sสษช สแดแด สแดแด
โฏ๏ธ แดแดษดแด = 6281260730830
โฏ๏ธ แดแดสsแด = 6281260730830

๐๐ผ๐ญ๐ : ๐๐ข๐ค๐ ๐๐ฎ๐๐๐ก ๐๐ผ๐ง๐๐ฌ๐ข ๐๐ข๐ฅ๐๐ก๐ค๐๐ง ๐๐ข๐ซ๐บ
๐๐ฎ๐ค๐ญ๐ข ๐๐ ๐๐ฐ๐ง๐๐ซ!!
๐๐จ๐ญ๐ยฒ: ๐๐ฎ๐ง๐ ๐ค๐ข๐ง ๐๐๐ญ๐๐ฅ๐๐ก ๐๐จ๐ง๐๐ฌ๐ข ๐๐ฎ๐ฅ๐ญ๐ข๐ฏ๐๐ฌ๐ข ๐๐ฎ ๐๐๐ง๐ข๐ง๐ ๐ค๐๐ญ ^_^

๐๐ญ๐๐ฎ ๐๐ฅ๐ข๐ค ๐๐ข ๐๐๐ฐ๐๐ก`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'ยฉ ๐ผ๐ ๐๐ค ๐ฝ๐ค๐ฉ',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'ยฉ ๐ผ๐ ๐๐ค ๐ฝ๐ค๐ฉ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'โฏ๏ธ แดแดสาแดแดแด แดกแดสสแด legends'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler