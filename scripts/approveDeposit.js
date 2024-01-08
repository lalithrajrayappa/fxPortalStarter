const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/astronaut.sol/astronaut.json');
require('dotenv').config();

async function main() {
 
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const astronaut = await ethers.getContractFactory("astronaut");
  const nft = await astronaut.attach('0xa4bA6d92fDb92EC6F65aE5ea60956A8ACEBb12DF');

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Successfully approved');

  const ID = [0, 1, 2, 3, 4]; 
  let i = 0
  while (i < ID.length) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address, 
      ID[i],
      '0x6566'
    );

    await depositTx.wait();
    i++;
  }

  console.log("successfully deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
