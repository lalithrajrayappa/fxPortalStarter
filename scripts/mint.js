const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0xa4bA6d92fDb92EC6F65aE5ea60956A8ACEBb12DF";

  const astronaut = await ethers.getContractFactory("astronaut", signer);
  const astronaut_contract = await astronaut.attach(contractAddress);

  await astronaut_contract.mint(5);
  console.log("Successfully minted required number of nfts");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
