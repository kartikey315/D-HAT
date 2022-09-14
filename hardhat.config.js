require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
  mumbai: {
    url: "https://rpc-mumbai.maticvigil.com",
    accounts: [privateKey]
  }
  }
}
