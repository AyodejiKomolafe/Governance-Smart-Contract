# Governance Smart Contract Hardhat Project

This project demonstrates a Openzeppelin Governance standard.

In this repository, you'll find two contracts:

MyGovernor - a contract built from the openzeppelin governor wizard. This Governor is configured to have a 5 block voting delay and voting period. To make things simpler it does not include a Timelock, although it should be noted that this is standard practice in governance.
MyToken - a token which is built to work together with the governor standard.

The contracts are deployed on the sepolia testnet. 

Governance Contract.

```https://sepolia.etherscan.io/address/0xE50c6b4a00C75EdB9f2b7D6EC21cF05f7d19f831#code```

MyToken Contract.

```https://sepolia.etherscan.io/address/0x48794a06166c35296051A420322b489BA96f30Ef#code```

I wrote a couple scripts to;
Deploy both contracts; 
Propose a new proposal to add more tokens to the deployer.
Vote on the proposal. 
Execute the proposal.

Try running some of the following tasks:

```shell
npm install
npx hardhat run scripts/deploy.js --network sepolia
npx hardhat run scripts/propose.js --network sepolia
npx hardhat run scripts/vote.js --network sepolia
npx hardhat run scripts/execute.js --network sepolia
```
