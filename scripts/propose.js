const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const governorAddress = "0xE50c6b4a00C75EdB9f2b7D6EC21cF05f7d19f831";
  const tokenAddress = "0x48794a06166c35296051A420322b489BA96f30Ef";

  const governor = await ethers.getContractAt("MyGovernor", governorAddress);
  const token = await ethers.getContractAt("MyToken", tokenAddress);

  const amount = "2500";
  const tx = await governor.propose(
    [token.address],
    [0],
    [
      token.interface.encodeFunctionData("mint", [
        owner.address,
        ethers.utils.parseEther(amount),
      ]),
    ],
    "Increase owner's token count!"
  );

  const receipt = await tx.wait();
  const event = receipt.events.find((x) => x.event === "ProposalCreated");
  const { proposalId } = event.args;
  
  console.log("proposal Id: ", proposalId);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
