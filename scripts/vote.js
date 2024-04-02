const { ethers } = require("hardhat");


const proposalId = ethers.BigNumber.from(
  "100645210704246549173354784917487106399239431093048712734968955728810134531868"
);

async function main() {
  const governorAddress = "0xE50c6b4a00C75EdB9f2b7D6EC21cF05f7d19f831";

  const governor = await ethers.getContractAt("MyGovernor", governorAddress);

  const tx = await governor.castVote(proposalId.toString(), 1);
  console.log("cast vote");
  console.log("tx: ", tx);
  console.log("proposalId ", proposalId);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
