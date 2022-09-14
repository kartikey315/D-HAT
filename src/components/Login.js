import React, { useState, useContext } from 'react'
import { AppState } from '../App'
import { ethers } from 'ethers';
import manageWallet from '../contract/manageWallet.json'
import Signup from './Signup';


const Login = () => {
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

    const LoginWallet = async () => {

        const pvkey = await Contract.getPrivatekey(email);
        const address = await Contract.getAddress(email);
        App.setAddr(address);
        App.setPkey(pvkey);
        console.log(pvkey)
        console.log(address)
        if (pvkey === '') {
            alert("User Not found")
            App.setOlduser(false);
        }
        else {

            App.setLogin(true);
        }
    }

    return (
        <div>
            {App.olduser ?
                <div className="App-header">
                    <div className='input'>
                        <input type="text" onChange={handleChange} value={email} />
                    </div>
                    <div className='box' onClick={LoginWallet}>
                        Login
                    </div>
                </div>
                :
                <Signup />
            }

        </div>
    )
}

export default Login