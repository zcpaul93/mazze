require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');


module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "mazze",
  networks: {
    mazze: {
      url: "https://testnet-rpc.mazze.io",
      accounts: process.env.PRIVATE_KEY
    }
  },
};