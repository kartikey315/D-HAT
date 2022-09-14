import React, { useState, useContext } from 'react'
import { AppState } from '../App'
import { ethers } from 'ethers';

const Wallet = () => {
    const App = useContext(AppState)

    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState(0);

    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
    const wallet = new ethers.Wallet(App.pkey, provider)

    let bal = 0;

    const handleReceiver = event => {
        setReceiver(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleValue = event => {
        setAmount(event.target.value);

        console.log('value is:', event.target.value);
    };

    const balance = async () => {

        const balance = await wallet.getBalance()
        bal = ethers.utils.formatUnits(balance, 18)
        console.log(bal);

    }

    const transfer = async () => {

        let tx = await wallet.sendTransaction({
            to: receiver,
            value: ethers.utils.parseEther(amount)
        });
    
        console.log('Sent in Transaction: ' + tx.hash);
    }

    return (
        <div>
            <div className='App'>
                <div>
                    {App.addr}
                </div>
                
                <div className='box' onClick={balance}>
                    Balance
                </div>

                <div className='input'>
                    <input type="text" onChange={handleReceiver} value={receiver} />
                </div>
                <div className='input'>
                    <input type="number" onChange={handleValue} value={amount} />
                </div>
                <div className='box' onClick={transfer}>
                    Transfer
                </div>
            </div>
        </div>
    )
}

export default Wallet