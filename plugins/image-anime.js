import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/anime?apikey=ibeng'
	conn.sendButton(m.chat, 'Nihh kak', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(wallpaperanime)$/i
handler.tags = ['downloader']
handler.help = ['wallpaperanime']
handler.premium = false
handler.limit = true

export default handler
