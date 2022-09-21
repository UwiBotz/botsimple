const { generateMessageID, downloadContentFromMessage, proto, generateWAMessageFromContent, prepareWAMessageMedia, areJidsSameUser, getLastMessageInChat, jidDecode } = require('@adiwajshing/baileys');
const colors = require('colors');
const axios = require('axios');
const util = require('util');
const chalk = require('chalk');
const { times, fetchJson, isUrl, getBuffer, getRandom, sleep, getGroupAdmins, downloadMediaMessage, runtime, jsonformat, formatDate, tanggal, formatp } = require('./utils/smsg');
const { y2mateV, y2mateA } = require('./utils/ytdl');
const fs = require('fs');
const os = require('os');
const { color, mylog, infolog } = require("./lib/color")
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const hentai = require('nhentai');
const fdl = require("caliph-api");
const hikki = require("hikki-me");
const ffmpeg = require('fluent-ffmpeg');
const PhoneNumber = require('awesome-phonenumber');
const readline = require('readline');
const { performance } = require('perf_hooks');
const speed = require('performance-now')
const { exec, spawn } = require('child_process');
const toMs = require("ms")
global.prem = require("./lib/premium")
const {isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance,isGame:isGame,gameAdd:gameAdd,givegame:givegame,cekGLimit:cekGLimit} = require("./lib/limit")
let print = console.log;
const cooldown = new Map();

const fke = '```'

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


module.exports = index = async(conn, m, store, warn) =>{
try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	const jsn = JSON.parse(fs.readFileSync('./src/database.json'));
	const snt = JSON.parse(fs.readFileSync('./database/anoucement.json'));
	const dta = JSON.parse(fs.readFileSync('./database/setting.json'));
	const args = body.trim().split(/ +/).slice(1)
	const arg = body.substring(body.indexOf(" ") + 1);
	const isCmd = body.startsWith(prefix)
	const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
	const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
	const sender = m.key.participant ? m.key.participant : m.key.remoteJid
	const senderName = m.pushName ? m.pushName : ''
	const pushname = m.pushName || "No Name"
	const text = q = args.join(" ")
	const fatkuns = (m.quoted || m)
	const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const qmsg = (quoted.msg || quoted)
	const isMedia = /image|video|sticker|audio/.test(mime)

	const isGroup = from.endsWith('@g.us')
	const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupDesc = isGroup ? groupMetadata.desc : ''
	const groupId = isGroup ? groupMetadata.id : ''
	const number = [`global.owner@s.whatsapp.net`]
	const isOwner = number.includes(sender)
	const botNumber = await conn.decodeJid(conn.user.id)
	const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : ''
	const isGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isBotGroupAdmins = isGroup ? await groupAdmins.includes(sender) : false
	const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium);
	
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const participants = m.isGroup ? await groupMetadata.participants : ''
	let who = m.mentions && m.mentions[0] ? m.mentions : m.fromMe ? this.user : m.sender 
	require('./setting');

const downloadContentFromMediaMessage = async(m) => {
let mime = (m.msg || m).mimetype || ''
const stream = await downloadContentFromMessage(m.quoted ? m.quoted : m.msg, mime.split("/")[0])
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

	// FAKE REPLY EX
	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Hallo ${pushname} 👋\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.thumb
                        }
	                  } 
                     }

	const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `*HIDETAG!*`,jpegThumbnail: global.thumb}}}
	const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283102650464-1589321480@g.us","inviteCode": "m","groupName": "XCoco", "caption": `XCoco MD`, 'jpegThumbnail': global.thumb}}}
    const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {}) },message: { "videoMessage": { "title":`*AUTO DOWNLOAD AUDIO YOUTUBE*`, "h": `Hmm`,'seconds': '10000000⁰0', 'caption': `*AUTO DOWNLOAD AUDIO YOUTUBE*`, 'jpegThumbnail': global.thumb}}}

		// TEMPLATE BUTTON!
		const buttonsDefault = []

		// PREM EXP
		prem.expiredCheck(conn, m, premium);
		
		// EXP
		if (jsn[0].expired !== false) {
  		if (jsn[0].expired < Date.now()) {
    		jsn[0] = {
      		setting: 'tidak ada iklan',
      		expired: false
    		}
    		fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
  		}
		}

        if (m.message) {
            conn.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.white(chalk.bgGreen(new Date)) + '\n          ' + chalk.white(chalk.bgMagenta(budy || m.mtype)) + '\n' + chalk.green('=> Dari'), chalk.magenta(pushname), chalk.yellow(m.sender) + '\n' + chalk.green('=> Di'), chalk.blueBright(m.isGroup ? pushname : 'Private Chat', from) + '\n' + chalk.magenta(''))
        }
// START COMMAND
switch(command){
			case'menu':
			case'help': {
				footerr = `Beri Waktu Jeda Pada Command 5 Detik!`
				anu = `${fke}Hii ${m.pushName} 👋, I'Am XCoco!${fke}

Nama : 「 ${m.pushName} 」
Tanggal : 「 ${tanggal(new Date)} 」

 *Search Menu:*
   ╰≻ ${prefix}Play
   ╰≻ ${prefix}Pinterest

 *Group Menu:*
   ╰≻ ${prefix}Kick
   ╰≻ ${prefix}Tagall
   ╰≻ ${prefix}Hidetag
   ╰≻ ${prefix}Totag
   ╰≻ ${prefix}Linkgc

 *Convert Menu :*
   ╰≻ ${prefix}Nulis
   ╰≻ ${prefix}Sticker
   ╰≻ ${prefix}Stickerwm
   ╰≻ ${prefix}Toimg
   ╰≻ ${prefix}Style
   ╰≻ ${prefix}Emojimix
   ╰≻ ${prefix}Smeme
   ╰≻ ${prefix}Tomp3
   ╰≻ ${prefix}Tomp4
   ╰≻ ${prefix}Toaudio
   ╰≻ ${prefix}Tovn
   ╰≻ ${prefix}Togif
   ╰≻ ${prefix}Tourl

 *Fun Menu :*
   ╰≻ ${prefix}Menfes
   ╰≻ ${prefix}Jodohku

 *Downloader Menu :*
   ╰≻ ${prefix}TikTok
   ╰≻ ${prefix}TikTokaudio
   ╰≻ ${prefix}Ytmp3
   ╰≻ ${prefix}ytmp4

 *Owner Menu :*
   ╰≻ ${prefix}Block
   ╰≻ ${prefix}Unblock
   ╰≻ ${prefix}Join
   ╰≻ ${prefix}Leave
   ╰≻ ${prefix}Addprem
   ╰≻ ${prefix}Delprem`,
					btn = [{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: 'Https://Instagram.Com/_wii017'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'DEVELOPER',
                                    id: 'owner'
                                }
                            }]

				conn.send5ButLoc(from, anu, footerr, global.thumb, btn)
 				 }                      
				break
			case 'addprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(act.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					m.reply("Sukses");
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
        case 'donasi':{
				m.reply('\`\`\`DANA : 081261632688\`\`\`\n\`\`\`PULSA : 081261632688\`\`\`')
				}
				break
			case 'tes':{
				m.reply('Connected! Siap Di Pakai :)')
				}
				break
			case 'join': {
                if (!isPremium) return m.reply('premium only')
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
                m.reply('wait bg...')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	    }
           	 break
			case 'leave': {
                if (!isCreator) return m.reply(act.owner)
                await conn.groupLeave(from).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                console.log()
            	}
             break
			case 'setsponsor':
			case 'setiklan':
				if (!isCreator) return m.reply(act.owner)
				if (args.length < 1) return m.reply('text nya mana')
				let intex = q.split('|')[0] ? q.split('|')[0]: q
				let expr = q.split('|')[1] ? q.split('|')[1]: ''
				exo = Date.now() + toMs(expr)
				newvalue = {
  				setting: intex,
  				expired: exo
				}
				oldvalue = jsn[0].setting
				let position = false
				Object.keys(jsn).forEach((i) => {
  				if (jsn[i].setting === oldvalue) {
    				position = i
  				}
				})
				if (position !== false) {
  				jsn[position] = newvalue
  				fs.writeFileSync('./src/database.json', JSON.stringify(jsn))
				}
				m.reply(`Iklan sukses diganti menjadi : *${jsn[0].setting}*`)
				break
			case 'owner':
			case 'creator': {
                conn.sendContact(from, global.owner, m)
          	  }
        	    break
			case'nulis':
				if(args.length < 1) return m.reply('text nya')
				m.reply(act.proc)
				await conn.sendMessage(from,{image:{url:`https://api.zekais.com/bukukanan?text=${body.slice(6)}&apikey=zekais`},caption:act.done},{quote:m}).catch((e) => m.reply(e))
				break
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
        	   if (/image/.test(mime)) {
        	   m.reply(act.proc)
              	  let media = await conn.downloadMediaMessage(qmsg)
            	    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
             	   await fs.unlinkSync(encmedia)
         	   } else if (/video/.test(mime)) {
        	    m.reply(act.proc)
        	        if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
             	   let media = await conn.downloadMediaMessage(qmsg)
             	   let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
        	        await fs.unlinkSync(encmedia)
      	      } else {
       	         m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
       	         }
        	    }
        	    break
			case 'stickerwm':
			case 'swm':
			case 'stickergifwm':
			case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	m.reply(act.proc)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(from, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
        	    }
        	    break
			case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                m.reply('Wait bang...')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
       	     }
     	       break
			case 'play':
			case 'ytplay': {
                if (!text) return m.reply(`Example : ${prefix + command} Deddy Corbuzier`)
                m.reply(act.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    { quickReplyButton: { displayText: `AUDIO`, id: `ytmp3 ${anu.url}` } },
                    { quickReplyButton: { displayText: `VIDEO`, id: `ytmp4 ${anu.url}` } }
                ]
                let buttonMessage = {
                    image : { url: anu.thumbnail },
                    caption : `YOUTUBE PLAY`,
                    footer : `JUDUL : ${anu.title}
DURASI : ${anu.timestamp}
VIEWERS : ${anu.views}
AUTHOR : ${anu.author.name}
SUMBER : ${anu.url}`,
                    templateButtons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
                console.log(anu)
      	      }
      	      break
			case 'ytmp3':
			case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
       	     }
        	    break
            case 'ytmp4':
			case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                conn.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${media.title}` }, { quoted: m })
        	    }
        	    break
			case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Hii Kak Ada Menfes Atau Surat Nih\nSaya Bot WhatsApp Hanya Pengantar!\n\nDari : ${saking}\nPesan : ${pesan}`
				header = 'hayyy'
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 but = [
                    { quickReplyButton: { displayText: `Confirm :)`, id: `menfesconfirm ${m.sender}` } }
                		]
					conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `` })
				m.reply(`Sukses Mengirim Menfess!`)
				break

			case 'menfesconfirm':
 				 conn.sendMessage(q, {text: `Pesanmu Sudah Di Baca <3`})
				  m.reply(`Terimakasih Menfess Telah Diterima.`)
				break
			case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply('masukkan link nya')
				let p = await fdl.downloader.tiktok(q)
				let nih = `*[ 👤 ] UPLOAD :* ${p.author}`
				let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: p.nowm },
                    caption: nih,
                    title: 'TIKTOK DOWNLOADER',
                    footer: '',
                    buttons: buttons,
                    headerType: 5
                }
                conn.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
			case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply('masukkan link nya')
				let aud = await fdl.downloader.tiktok(text)
				let cap = ``
				conn.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
			case 'kick': {
				if (!m.isGroup) return m.reply(act.gc)
        		if (!isBotAdmins) return m.reply(act.botadm)
        		if (!isAdmins) return m.reply(act.admin)
				let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
				await conn.groupParticipantsUpdate(from, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'tesbut':{
			let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'TES OWNER'}, type: 1}
                ]
                conn.sendMessage(from, {text:`*NGETES BUTTON*`, title: 'WALLET', footer: 'XCoco Multi Device', buttons: buttons})
                }
                break
			case 'request': case 'requestfitur':{
				if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Tambahin fitur tiktok downloader dong`)
				conn.sendMessage(`6285755825621@s.whatsapp.net`, {text: `*Hallo owner ada yang request fitur nih*\n\nPesan : ${text}\nPengirim : ${m.sender}`}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "6283102650464-1589321480@g.us" } : {})},
				message: { "extendedTextMessage": {
				"text": `Request Fitur!`,
				"title": `Pasang iklan murah bang`,
				'jpegThumbnail': global.thumb}}}})
				m.reply('suksess request')
				}
				break
			case 'tagall': {
                if (!m.isGroup) return m.reply(act.gc)
                if (!isBotAdmins) return m.reply('jadikan gw admin dulu')
                if (!isAdmins) return m.reply('only admin')
				let teks = `─────✪〘 *👥 Tag All* 〙✪─────
 
 ≻ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `╰≻ @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
			case 'jodohku': {
           	 if (!m.isGroup) return m.reply(act.gc)
          	  let member = participants.map(u => u.id)
          	  let me = m.sender
          	  let jodoh = member[Math.floor(Math.random() * member.length)]
          	  let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
           	 let ments = [me, jodoh]
          	  let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, jawab, global.footer, m, {mentions: ments})
          	  }
           	 break
      	  case 'unblock': {
				if (!isCreator) return m.reply(act.owner)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'copystyle':
				if (args.length < 2) return m.reply(`khusus button`)
				let judul = q.split('|')[0] ? q.split('|')[0] : q
				let style = q.split('|')[1] ? q.split('|')[1] : ''
				var captionnye = `copy hasilnya dibawah ya!\n\nName : ${judul}\nStyle : ${style}`
				var copynye = `${style}`
				const menuButa = [
    				{index: 1, urlButton: {displayText: `Copy Here`, url: 'https://www.whatsapp.com/otp/copy/'+copynye}}
				]
  			  await conn.sendMessage(from, { text: `${captionnye}`, templateButtons: menuButa, footer: `` })
				break
	  	  case 'style': case 'styletext': {
				let { styletext } = require('./lib/scraper')
				if (!text) return m.reply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                var list = []
                for (let i of anu) {
                list.push({
				title: i.name, rowId: `copystyle ${i.name} | ${i.result}`, description: `${i.result}`})
				}
				var sections = [{title: `Pilih salah satu lalu kirim.`, rows:list}]
				var listms = { text: `*Srtle Text*\n\nBerhasil menemukan sytle font\nSilahkan pilih font yang anda suka.`, footer: ``, buttonText: "Click Here", sections }
				conn.sendMessage(from, listms, {quoted:m})
	  		  }
	  		  break
			case 'anticall': {
           	 if (!isCreator) return m.reply(act.owner)
                let ciko = JSON.parse(fs.readFileSync('./database/setting.json'));
                if (args[0] === "on") {
                if (ciko.setting.anticall == true) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko.setting.anticall = true
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (ciko.setting.anticall == false) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko.setting.anticall = false
				fs.writeFileSync('./database/setting.json', JSON.stringify(ciko))
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await conn.sendButtonText(from, buttons, `Mode AntiCall`, global.footer, m)
                }
          	   }
       	      break
			case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
       	     }
         	   break
			case 'pinterest': {
               	 m.reply(act.wait)
					let { pinterest } = require('./lib/scraper')
               	 anu = await pinterest(text)
               	 result = anu[Math.floor(Math.random() * anu.length)]
              	  conn.sendMessage(from, { image: { url: result }, caption: '[ 🖇 ] SUMBER : '+result }, { quoted: m })
         		   }
          		  break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       	 if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
      	      if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`)
	   	     m.reply(act.wait)
       	     atas = text.split('|')[0] ? text.split('|')[0] : '-'
      	      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	  	      let dwnld = await conn.downloadMediaMessage(qmsg)
	 	       let { floNime } = require('./lib/uploader')
	  	      let fatGans = await floNime(dwnld)
	       	 let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	  	      let has = await conn.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
	  	      await fs.unlinkSync(has)
       	     }
	  	      break     
			case 'emojimix': {
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
				let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
				for (let res of anu.results) {
				    let encmedia = await conn.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				    await fs.unlinkSync(encmedia)
				}
	 		   }
	  		  break
			case 'hidetag': {
           	 if (!m.isGroup) return m.reply(act.gc)
            	if (!isBotAdmins) return m.reply(act.botadm)
          	  if (!isAdmins) return m.reply(act.admin)
         	   conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
         	   }
            	break
            case 'totag': {
               if (!m.isGroup) return m.reply(act.gc)
               if (!isBotAdmins) return m.reply(act.botadm)
               if (!isAdmins) return m.reply(act.admin)
               if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               conn.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case prefix+'linkgroup':case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':{
			if (!isGroup) return m.reply(act.gc)
			if (!isBotGroupAdmins) return m.reply(act.botadm)
				var url = await conn.groupInviteCode(from).catch(() => m.reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				m.reply(url)
}
				break
			case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
        	    }
           	 break
            case 'toaud': case 'toaudio': {
        	    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
        	    m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toAudio } = require('./lib/converter')
         	   let audio = await toAudio(media, 'mp4')
          	  conn.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
          	  }
           	 break
            case 'tomp3': {
          	  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
           	 let media = await conn.downloadMediaMessage(qmsg)
           	 let { toAudio } = require('./lib/converter')
            	let audio = await toAudio(media, 'mp4')
           	 conn.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
           	 }
           	 break
            case 'tovn': case 'toptt': {
         	   if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
          	  m.reply(act.wait)
          	  let media = await conn.downloadMediaMessage(qmsg)
          	  let { toPTT } = require('./lib/converter')
          	  let audio = await toPTT(media, 'mp4')
         	   conn.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
           	 }
          	  break
            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption *${prefix + command}*`)
                m.reply(act.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
         	   }
          	  break
	        case 'tourl': {
                m.reply(act.wait)
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            	}
          	  break
			case 'name':
				conn.sendMessage(from, {text: conn.getName('6285755825621@s.whatsapp.net')})
				break
// BATAS AKHIR COMMAND
default:
if (budy.includes('bot') || budy.includes('xcoco')) {
	let mojii = ["👑"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, 
        key: m.key
    }
}

conn.sendMessage(from, reactionMessage)
	}
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'DEVELOPER'}, type: 1}
                ]
			conn.sendMessage(from, {text:`Mau Masukin Bot Ke Group Kamu? Hubungi Developer`, title: 'LINK GROUP DECTETED', footer: 'XCoco Multi Device :)', buttons: buttons, headerType: 5})
		}
if (budy.startsWith("$") && isCreator) {
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) m.reply(`${stdout}`.trim())
})
}
if (budy.startsWith(`>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(m.key.remoteJid, { text: JSON.stringify(eval(body.slice(2)), null, 2)}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(from, { text: String(e)}, { quoted: m})}
}
if (budy.startsWith(`=>`)) {
try {
	if (!isCreator) return m.reply(act.owner)
conn.sendMessage(from, { text: util.format(eval(`( async () => { return ${body.slice(3)}})()`))}, { quoted: m})
} catch (e) {
print(e)
conn.sendMessage(`6283102650464@s.whatsapp.net`, { text: String(e) }, { quoted: m})
}
}
}
} catch(e) {
print(`[x] Error: ${e}`.red)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
