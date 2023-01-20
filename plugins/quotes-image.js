import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/katakata?apikey=ibeng'
	conn.sendButton(m.chat, 'Nihh kak', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(quotesimg)$/i
handler.tags = ['quotes']
handler.help = ['quotesimg']
handler.premium = false
handler.limit = true

export default handler
