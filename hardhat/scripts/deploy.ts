import { ethers } from "hardhat";

async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  const storage = await ethers.deployContract("Storage");

  await storage.waitForDeployment();

  const contractAddress = await storage.getAddress();
  console.log(`Storage deployed to: ${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });