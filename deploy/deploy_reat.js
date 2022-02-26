const { network } = require('hardhat');
let { networkConfig } = require('../helper-hardhat-config');

module.exports = async( {
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, get, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = await getChainId();

    log("Deploying 'MasterREAT_EG' Token Generator Contract");
    
    const MasterREAT = await deploy( 'MasterREAT_EG', {
        from: deployer,
        args: [],
        log: true
    })

    log("Contract has been deployed!");

    const networkName = networkConfig[chainId]["name"];

    log(`Verify your contract with: \n npx hardhat verify --network ${networkName} ${MasterREAT.address}`  );

};

module.exports.tags = ['reat'];