# Test Guidelines

Audit Trail for the Test Steps taken for each deployed contract


# Verified Contract - 1

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 14.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0xD5feF439D07a66A86bF3fd61D17758f9E813B53b#code) | Added ReentrancyGuard modifier, imported Pausable and Base64 contracts, proposed replacing Bool with uint128 in reatdata struct to save on gas |

# Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [Success](https://rinkeby.etherscan.io/tx/0x5036e5991a92419c1453e3d32e934d52e31061ec57c8d9de16c8dab21ce72e55) | 236,365 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonToken = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [Success](https://rinkeby.etherscan.io/tx/0x53025fe2266c09babaeef60d92f0fd35f80137c5cb01ff6391b2ad1345ce59cb) | 175,552 |


# Verified Contract - 2

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 16.03.2022 | [Contract]() | Replaced Bool with uint128 in reatdata struct and initialized it at deployment to equal 1 to save on gas |

# Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [Success]() | 236,365 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonToken = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [Success]() | 175,552 |