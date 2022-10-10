const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xa716bf79D01766B696578cC12dce4D2E09cfF287";

async function main() {
  const MarketplaceV2 = await ethers.getContractFactory("MarketplaceV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, MarketplaceV2);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });