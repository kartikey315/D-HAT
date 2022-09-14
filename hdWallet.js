const HDWallet = require('ethereum-hdwallet')
const bip39 = require("bip39");


const getWallet = () => {
    const mnemonic = 'tag volcano eight thank tide danger coast health above argue embrace heavy'

    const seed = bip39.mnemonicToSeed(mnemonic).toString('hex')
    const hdwallet= HDWallet.fromSeed(seed)

    const mywallet = hdwallet.derive(`m/44'/60'/0'/0`)

    const addr = `0x${mywallet.derive(2).getAddress().toString('hex')}`
    console.log(addr);
    console.log(mywallet.derive(2).getPrivateKey().toString('hex'))
}

getWallet();