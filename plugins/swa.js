import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
let url = 'https://telegra.ph/file/1759d54cf5192df1dc944.jpg'
let cap = `ββκ₯γ *ππ΄ππ° & πΏππ΄πΌπΈππΌ* γκ₯ββ¬£

ββκ₯γ π·π°ππΆπ° ππ΄ππ° γ
β
ββΎ 4 Κα΄ΚΙͺ 5α΄ / Ι’Κα΄α΄α΄ ( 1 Group )
ββΎ 1 Minggu 10α΄ / Ι’Κα΄α΄α΄ ( 1 Group )
ββΎ 1 Bulan 20K / Ι’Κα΄α΄α΄ ( 1 Group )
ββΎ 3 Bulan 25K /Group (1Group)
ββΎ 6 Bulan 35K /Group (1Group)
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 50K / Ι’Κα΄α΄α΄ ( 1 Group )+Premium
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ π·π°ππΆπ° πΏππ΄πΌπΈππΌ γ
β
ββΎ 15 Κα΄ΚΙͺ 10α΄ ( 1 Nomor + 10 JT )
ββΎ 30 Κα΄ΚΙͺ 15α΄ ( 1 Nomor + 100 JT )
ββΎ 45 Κα΄ΚΙͺ 20α΄ ( 1 Nomor + 10 M )
ββΎ 60 Κα΄ΚΙͺ 25α΄ ( 1 Nomor + 100 M )
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 30α΄ ( 1 Nomor + 10 T )
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ κ°Ιͺα΄α΄Κ 500+ γ
β
ββΎ α΄‘α΄Κα΄α΄α΄α΄
ββΎ α΄Ιͺα΄α΄
ββΎ α΄Ι΄α΄ΙͺΚΙͺΙ΄α΄
ββΎ κ±α΄Ιͺα΄α΄Κ
ββΎ κ±α΄α΄Ι΄α΄
ββΎ α΄Ι΄Ιͺα΄α΄
ββΎ κ±α΄Ι΄α΄ α΄ ΙͺΚα΄α΄x
ββΎ κ±α΄Ι΄α΄ Κα΄Ι’
ββΎ Ι’α΄α΄α΄ Κα΄Ι’
ββΎ α΄ΚΚ
β
βββκ₯ *${author}* κ₯ββ¬£
`
conn.sendButtonDoc(m.chat, cap, author, 'owner', usedPrefix + 'owner', m, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Β© AkioBot',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Β© AkioBot',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(url)).buffer(),
    thumbnailUrl: sgc,
    title: 'Sewa Bot && Up To Premium'
				}
			}
})
}
handler.command = /^(sewa)$/i

export default handler