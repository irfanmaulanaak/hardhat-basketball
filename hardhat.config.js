require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.13',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: "https://eth.getblock.io/rinkeby/",
      accounts: [process.env.PRIVATE_KEY_USER],
      chainId: 4,
      httpHeaders: { "x-api-key": process.env.GETBLOCK_API_KEY }
    },
    // mainnet: {
    //   url: "https://eth.getblock.io/mainnet/",
    //   accounts: [process.env.MAIN_ACCOUNT],
    //   chainId: 1,
    //   httpHeaders: { "x-api-key": process.env.GETBLOCK_API_KEY }
    // },
    // bscmainnet: {
    //   url: "https://bsc.getblock.io/mainnet/",
    //   accounts: [process.env.MAIN_ACCOUNT],
    //   httpHeaders: { "x-api-key": process.env.GETBLOCK_API_KEY }
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
