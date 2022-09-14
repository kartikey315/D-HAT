// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract manageWallet {

    struct User {
        
        address wallet;
        string privatekey;
    }
   
    mapping(string => User) userWallets;

    function addWallet(string memory email, address walletAddress, string memory privateKey) public {

        userWallets[email] = User(walletAddress, privateKey);
    }

    function getPrivatekey(string memory email) view public returns(string memory) {

        return userWallets[email].privatekey;
    }

    function getAddress(string memory email) view public returns(address){

        return userWallets[email].wallet;
    }


}
