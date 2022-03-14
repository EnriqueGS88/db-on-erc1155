# Database structured in an ERC-1155 NFT

Store metadata about real estate in a distributed ledger.

The Metadata is structured in an NFT (ERC-1155) that points to data stored in IPFS.

The contracts in this project rely heavily on the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) contracts.

Upon cloning this repository, try running these commands:

```shell
npm install
npx hardhat compile
npx hardhat deploy --network rinkeby --tags reatCall
```

# Verified Contracts

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 26.02.2022 | [Contract](https://rinkeby.etherscan.io/address/0x8F0cFA2de4F6491538BB3Ae38392cFC409040d72#readContract) |   |
| 06.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0x5bDc3334858fda310f266e340e1eF1b16584A814#readContract) |   |
| 06.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0x5e72f1f60242501B725C583a316e1d504C1c56ca#code) |   |
| 09.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0x9998C58F7d5F55f82FF5DC3051592c3eb1237531#code) | Fixed getUri() by replacing encode with encodePacked  |
| 11.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0x3E8a387bFC9b7774266813d2756026a1E7d97734#code) | Fixed getUri() and reatdata struct several times|
| 14.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0xD5feF439D07a66A86bF3fd61D17758f9E813B53b#code) | Added ReentrancyGuard modifier, imported Pausable and Base64 contracts, proposed replacing Bool with uint128 in reatdata struct to save on gas |
