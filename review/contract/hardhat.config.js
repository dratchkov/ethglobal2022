require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://snowy-special-slug.matic-testnet.discover.quiknode.pro/749b924519c9c6680a8abcc381ab5296a73ae286/",
      accounts: ["a4b9d5030091563fe46596dc7437a38a351c793d4208e370b5a99e8879514df1"],
    }
  }
};
