# Test Guidelines

Audit Trail for the Test Steps taken for each deployed contract


# Verified Contract - 1

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 14.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0xD5feF439D07a66A86bF3fd61D17758f9E813B53b#code) | Added ReentrancyGuard modifier, imported Pausable and Base64 contracts, proposed replacing Bool with uint128 in reatdata struct to save on gas |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0x5036e5991a92419c1453e3d32e934d52e31061ec57c8d9de16c8dab21ce72e55) | 236,365 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [tx](https://rinkeby.etherscan.io/tx/0x53025fe2266c09babaeef60d92f0fd35f80137c5cb01ff6391b2ad1345ce59cb) | 175,552 |


# Verified Contract - 2

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 16.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0xc9A6D56d40D22A8Af1293A4292e3e93855899398#code) | Replaced Bool with uint128 in reatdata struct and initialized it at deployment to equal 1 to save on gas |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0x52893bd3f5ffc3cd5e9368c21b159483603a677afe6b547942d13a70c8ad28ce) | 234,158 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc' | [tx](https://rinkeby.etherscan.io/tx/0xa72044764c7f2093b36fac93da69ff88a4a4625e9c7dc87e9e0986a9e788097e) |  29,803 |


# Verified Contract - 3

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 16.03.2022 | [Contract](https://rinkeby.etherscan.io/address/0xbF5FaAAe37Edc04CD06C8676c13B1B5644878d9E#code) | Replaced uint128 with uint256 since the Design assumes the json tokens are created with keccak256 |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0x3f3f16a6998779c8152fa6b5fbc0ef2a7bbf49e19c23bb4d7df98369079b0d10) | 255,874 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [tx](https://rinkeby.etherscan.io/tx/0x41211b78d4e82e441dfab111a78abc85783540d270eb9e1dc2e8ab6d3395fe92) |  31,658  |


# Verified Contract - 4

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 07.06.2022 | [Contract](https://rinkeby.etherscan.io/address/0x3046e31F2855449Be3f509f03FcB08171332d615#code) | Added reentrancy guard, pausable and ownable properties. Version aligned with Gabriel  |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0x3f3f16a6998779c8152fa6b5fbc0ef2a7bbf49e19c23bb4d7df98369079b0d10) | 236,365 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [tx](https://rinkeby.etherscan.io/tx/0xd8b4e197e4ab7e434d025740ee9de70f4a8d649e9af97883e4a0a7f1e3065443) |  117,035  |

# Verified Contract - 5

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 07.06.2022 | [Contract](https://rinkeby.etherscan.io/address/0x640Ec55454887d9fA69CEFB95110e2B9717eE18a#code) | Added reentrancy guard, pausable and ownable properties. Version aligned with Gabriel  |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0xd0681a811dc9e12165b31399f9cef7b960011ffba500322c9aef8956a8289743) | 255,874 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [fail](tx cannot be processed) |  none  |

# Verified Contract - 6 - Savings Improvements

| Date | Contract | Comments |
| ---- | -------- | -------- |
| 07.06.2022 | [Contract](https://rinkeby.etherscan.io/address/0x9482d2f64801b9db7838904824ed92907094762c#code) | Replaced boolean with constants for savings. Changed uint128 for uint256 on updateHashJsonDoc()  |

## Test Steps

| Step | Function Called | Input | Output | Gas Consumed |
| ---- | -------- | -------- | -------- | -------- |
| 1 | addREAT() | _idCatrastro = '2333308DF3823C0093LW', _hashJsonToken = '0x42e0da50598ad4229d73b96e097a2f1d988b6ec35e3cb26cced523a27ba58e2e' | [tx](https://rinkeby.etherscan.io/tx/0xeea2894b1c3c8700ebfdb5c09f5e3a7556e46a5e479a3e407f5f089c29ed47ec) | 255,874 |
| 2 | updateHashJsonDoc() | _id = 1, _hashJsonDoc = '0x535201f505f4cbd00316748c5ffc6cd7324552c50b884184fc290c1b5a47bddd' | [tx](https://rinkeby.etherscan.io/tx/0x2f9e3fd8bf588501bd3715f7e843364c60126e890371dc19317e84a1fe7040b2) |  31,850  |