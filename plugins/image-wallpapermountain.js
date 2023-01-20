import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/mountain?apikey=ibeng'
	conn.sendButton(m.chat, 'Nihh kak', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(wallpapermountain)$/i
handler.tags = ['downloader']
handler.help = ['wallpapermountain']
handler.premium = false
handler.limit = true

export default handler
