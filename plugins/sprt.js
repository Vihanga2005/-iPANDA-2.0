const Asena = require('../events');


2
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');


3
const fs = require('fs');


4
const axios = require('axios');


5



6
Asena.addCommand({pattern: 'ipanda', fromMe: false,dontAddCommandList: true}, (async (message, match) => {


7



8
    var r_text = new Array ();    


9
r_text[0] = "*iPANDA BOT INSPIRED BY GARFIELD 3.0                            Special thanks                                 🐼@Bailays                                     🐼@afnanpalikkal                               🐼@yusufunta                                  🐼@Farhan                                     🐼@hasindu                                    🐼@Lasindunethsara*";


10
r_text[1] = "*iPANDA BOT INSPIRED BY GARFIELD 3.0                             Special thanks                                 🐼@Bailays                                     🐼@afnanpalikkal                               🐼@yusufunta                                  🐼@Farhan                                     🐼@hasindu                                    🐼@Lasindunethsara*                         🐼@Tharindu Liyanage";


11
var i = Math.floor(2*Math.random())


12



13
await message.sendMessage(r_text[i]);


14



15
}));


16
