# Mint NFT contract

### Step#1
Clone the repo. Run ``` 
npm i ``` on the root directory.

### Step#2
Download Metamask extenssion: https://metamask.io/.

### Step#3
Setup the new wallet if the there is no wallet exist before.

### Step#4
Select goerli test from metamask.

### Step#5
Once you have succesfully set goerli test network then you must have to request some test ETH token through following:
1) https://faucets.chain.link/ 
2) https://goerlifaucet.com/Check your wallet after 30 to 40 seconds it will reflect some amount in your wallet.

### Step#6
Go to your metamask extension again and get your private wallet key by clicking three dots menu button in wallet select account details from the menu and click on the export private key once you confirm the password it will return your's private key just copied it for now.

### Step#7
Go to the repo open the file hardhat.config. Paste the copied private key into accounts array.

### Step#8
Run the command ```
npx hardhat run scripts/deploy.js --network goerli``` on the root directory.

Once your command is succesfully run it will print a log on your terminal for example: "Contract deployed to: 0x8D07d7e63BDe74Df31Cead16c601a1C4E5De20f6"