# Astronaut walking on ice from Goerli to Mumbai Bridge Using fxPortal

In this project I have used DALL-E to create a collection, upload it to ipfs storage and transferred the respective assets from goerli to mumbai testnet using the fxPortal bridge.

## Description

The initial step involved leveraging DALL-E for the creation of a collection comprising five distinct items with prompt- "Astronaut walking on ice". Subsequently, the collection was securely stored on the Pinata cloud to facilitate storage on the IPFS network with base URl- ["https://gateway.pinata.cloud/ipfs/QmetNL6CNN8e3J46i7Af4wmy5xm9u8AqUqQ6xz1S1kkeXs/]". 

Following this, I deployed an ERC721a contract, ensuring the inclusion of all essential details and functionalities. The next phase encompassed the batch minting of five NFTs within the Goerli testnet. Subsequent to the minting process, authorization was granted to the Fxroot contract, enabling the seamless transfer of assets to the Mumbai testnet. The deposited assets on the Mumbai testnet were then scrutinized by obtaining the balance of the contract, utilizing the public key of the wallet and the Mumbai testnet contract address.

## Metamask 

- Make sure you have enough goerli ETH tokens in goerli testnet to deploy and transfer assets.

- Make sure you have enough MATIC tokens in mumbai testnet network to check the balance .

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## Troubleshooting
If you encounter issues during the bridging process, consider the following troubleshooting steps:

* Ensure all dependencies are installed correctly.
* Double-check the provided private key and network configurations.
* Verify contract deployment and update script variables accordingly.
* Monitor the Polygon account on polyscan.com for token arrival.
## Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
## Authors

Lalith Raj Rayappa
[lalithrajrayappa@gmail.com]
## License
This project is licensed under the MIT License.
