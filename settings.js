const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['918416093656'] //ur owner number
global.ownernomer = "919378043489" //ur owner number2
global.ownername = "Herbert Suantak" //ur owner name
global.ytname = "YT: HBMods OFC" //ur yt chanel name
global.socialm = "IG: Herbert_Suantak2" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "HBWABot v3"
global.ownernumber = '918416093656'
global.ownername = 'Herbert Suantak'
global.ownerNumber = ["918416093656@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@HBMods_Channel"
global.websitex = "https://herbert70.blogspot.com"
global.wagc = "https://chat.whatsapp.com/IgV6un73n0J9TfzyVsaBRA"
global.themeemoji = '🖤'
global.wm = "HBWA Bot Inc."
global.botscript = 'https://github.com/HBMods-OFC/HBWABot-v3' //script link
global.packname = "Sticker By"
global.author = "HBWABot"
global.creator = "918416093656@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./HBMedia/theme/hbwabot.png") //ur thumb pic
global.log0 = fs.readFileSync("./HBMedia/theme/hbwabot.png") //ur logo pic
global.err4r = fs.readFileSync("./HBMedia/theme/hbwabot.png") //ur error pic
global.thumb = fs.readFileSync("./HBMedia/theme/hbwabot.png") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Hei le!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
