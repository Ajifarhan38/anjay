let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://saipulanuar.herokuapp.com/api/memeh?apikey=${bearkey}`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Ini Kak', wm2, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
