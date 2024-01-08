const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/astronaut.sol/astronaut.json");

const tokenAddress = "0x39BBe808695a37737A13E6834A06beD31f171E94";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xEae5a1aD92b75A838Dd6Ef2906E8f192c1192FfB"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Polygon balance: " + await token.balanceOf(walletAddress) + " fxLR");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
