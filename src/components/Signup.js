import React, { useState, useContext } from 'react'
import { AppState } from '../App'
import { ethers } from 'ethers';
import manageWallet from '../contract/manageWallet.json'
const HDWallet = require('ethereum-hdwallet')
const bip39 = require("bip39");

const Signup = () => {

    const App = useContext(AppState)

    const [email, setEmail] = useState('');

    const contractAddress = '0x41F56128BCff175B01e3d2FBE1Bfc0Ef1905cAA3'

    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");

    const privatekey = '0f35b36262ffeca9c50e17d85cdd754f6bafa81a2abf22fd489e61809cd753fb'
    const wallet = new ethers.Wallet(privatekey, provider)

    const Contract = new ethers.Contract(contractAddress, manageWallet.abi, wallet);

    const handleChange = event => {
        setEmail(event.target.value);

        console.log('value is:', event.target.value);
    };

    const signUser = async () => {

        const mnemonic = 'tag volcano eight thank tide danger coast health above argue embrace heavy'

        const seed = bip39.mnemonicToSeed(mnemonic).toString('hex')
        const hdwallet = HDWallet.fromSeed(seed)

        const mywallet = hdwallet.derive(`m/44'/60'/0'/0`)

        const address = `0x${mywallet.derive(4).getAddress().toString('hex')}`
        console.log(address);
        const privatekey = (mywallet.derive(4).getPrivateKey().toString('hex'))
        console.log(privatekey);

        const addUser = await Contract.addWallet(email, address, privatekey);
        await addUser;
        console.log(addUser);

        App.setOlduser(true);

    }


    return (
        <div className="App-header">

            <div className='input'>
                <input type="text" onChange={handleChange} value={email} />
            </div>
            <div className='box' onClick={signUser}>
                Signup
            </div>
        </div>
    )
}

export default Signup