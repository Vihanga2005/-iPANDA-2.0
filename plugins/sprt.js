const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'project', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "*Development*\n\n*⚙️Tharindu Liyanage(ZENOI)*\n*⚙️Vihanga nethmina*\n*⚙️Afna palikkal*\n*⚙️Bailays*\n*⚙️Yusufunta*\n\n*Helpers*\n*📊 Lasindu Nethsara*\n*📊 Hasindu Dinushan*\n\n*Follow us 💬*\n*facebook*\n *https://www.facebook.com/garfieldbots/*";
r_text[1] = "*Development*\n\n*⚙️Tharindu Liyanage(ZENOI)*\n*⚙️Vihanga nethmina*\n*⚙️Afna palikkal*\n*⚙️Bailays*\n*⚙️Yusufunta*\n\n*Helpers*\n*📊 Lasindu Nethsara*\n*📊 Hasindu Dinushan*\n\n*Follow us 💬*\n*facebook*\n *https://www.facebook.com/garfieldbots/*";
var i = Math.floor(2*Math.random())

await message.sendMessage(r_text[i]);

}));
