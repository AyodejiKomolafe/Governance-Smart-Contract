const { ethers } = require("hardhat");

const { toUtf8Bytes, keccak256, parseEther } = ethers.utils;

async function main() {
  const [owner] = await ethers.getSigners();
  const governorAddress = "0xE50c6b4a00C75EdB9f2b7D6EC21cF05f7d19f831";
  const tokenAddress = "0x48794a06166c35296051A420322b489BA96f30Ef";

  const governor = await ethers.getContractAt("MyGovernor", governorAddress, owner.target);
  const token = await ethers.getContractAt("MyToken", tokenAddress);

  const tx = await governor.execute(
    [token.address],
    [0],
    [
      token.interface.encodeFunctionData("mint", [
        owner.address,
        parseEther("25000"),
      ]),
    ],
    keccak256(toUtf8Bytes("Increase owner's token count!"))
  );

  console.log("tx: ", tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
