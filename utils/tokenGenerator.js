const ethers = require('ethers');

// catastroID provided by the Catastro office via an API
const catastroID = '2333308DF3823C0093LW';

// Object that stores the attributes of the property
const jsonMetadata = {
    name: catastroID,
    description: "REAT token",
    image: "ipfs://bafybeihbq6rt7746upcdvud5tag3zbufeqdlr6axd3b4fs4k7uq5geqjry/fachadaUpc.jpg",
    surface: "690m2"
}

const ipfsMetadata = {
    token: {
        ipnft: 'bafyreiayta72by25webr7ht35dpt2mirrnsdpvlveqnxbec7lnixdp3n24',
        url: 'ipfs://bafyreiayta72by25webr7ht35dpt2mirrnsdpvlveqnxbec7lnixdp3n24/metadata.json'
      }
}

// Convert the metadata json into a string
let stringMetadata = JSON.stringify( jsonMetadata );

// Function to hash the json metadata
// First convert the json from UTF-8 into bytes data
// Second run a keccak256 on the converted bytes
let hashJsonToken = ( string ) => {
    let hashedValue = ethers.utils.keccak256( ethers.utils.toUtf8Bytes( string ) );
    return hashedValue;
}

console.log( "hashJsonToken: ", hashJsonToken( stringMetadata ) );

console.log( "hashJsonDoc: ", hashJsonToken( hashJsonToken( stringMetadata ) ) );