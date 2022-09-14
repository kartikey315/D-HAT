const hre = require("hardhat");


async function main() {
  const ManageWallet = await hre.ethers.getContractFactory("manageWallet");
  const managewallet = await ManageWallet.deploy();
  await managewallet.deployed();
  console.log("managewallet deployed to:", managewallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })