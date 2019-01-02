// Assuming you have already done "npm install fernet"
let Fernet = require('fernet')
let secret = new Fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = `gAAAAABcG6CwEgfeXHmQtGAM6gFTzlclkB1Pagxn7OL-EbqSavwt95qRiqJPiV-0W4LBpTYuNur9feod898igFcU8-
VDMaA4RseP8v9wmPByL1XMAq3vgIWKuOyNiL0RYWNkiNDpMPDGj21wHlr96t7UGdeliXGsQ9aUJK1PIfn68fLkrSgWj6Si5pkBGZ_cUCKgHCEBkLOf`
let token = new Fernet.Token({secret: secret, token: message, ttl:0})

console.log(token.decode())