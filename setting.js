const fs = require('fs')
const chalk = require('chalk')

// WEB APIKEY
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// APIKEY WEBSITE
global.ApiKey = 'coderevolution' 

global.smm = {
  nomor : '6281261632688',
  atasnama : 'XCoco'
}

// Other
global.owner = ['6281261632688']
global.premium = ['6281261632688']
global.sponsor = 'Tidak Ada Sponsor :)'
global.packname = 'XCoco'
global.footer = 'XCoco Multi Device'
global.author = 'WhatsApp'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'Please Wait. Processing Data...',
		den:'Sorry You Not Register',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})