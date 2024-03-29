const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const lockContract = await hre.ethers.deployContract("MyTest", [unlockTime], {
    value: lockedAmount,
  });
  
  await lockContract.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lockContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
