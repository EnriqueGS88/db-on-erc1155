const { network, ethers } = require('hardhat');
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
    
    // Deploy contract
    const MasterREAT = await deploy( 'MasterREAT_EG', {
        from: deployer,
        args: [],
        log: true
    })

    log("Contract has been deployed!");

    const networkName = networkConfig[chainId]["name"];

    // Print the following string to easily verify your contract
    log(`Verify your contract with: \n npx hardhat verify --network ${networkName} ${MasterREAT.address}`  );

    // Get accounts and signers to consequently send transactions post deployment
    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];


    // Below a set of tx's that will be sent to the newly deployed contract

    // Get Contract instance to start calling its functions and sending transactions

    const MasterREATContract = await ethers.getContractFactory('MasterREAT_EG');
    const masterReat = new ethers.Contract(MasterREAT.address, MasterREATContract.interface, signer);

    let _tokenId = 1;
    let uri_tx = await masterReat.getUri( _tokenId );
    log( "This is the tokenURI for the Id you provided: ", uri_tx );
    

};

module.exports.tags = ['reatCall'];