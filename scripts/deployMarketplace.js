const { ethers, upgrades } = require("hardhat");

async function main() {
  const signerAddress = "0xA6Cfe4016E68baCe4ac472A24671872bAB063513"
  const MarketplaceV1 = await ethers.getContractFactory("Marketplace");
  const proxy = await upgrades.deployProxy(MarketplaceV1, [signerAddress]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();