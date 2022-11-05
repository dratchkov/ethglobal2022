require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/9ypPIMolMUQTWnvDq9eDptbvARsI7Zv3',
      accounts: [''],
    },
  },
};