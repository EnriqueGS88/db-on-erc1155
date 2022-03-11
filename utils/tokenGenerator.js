const ethers = require('ethers');

// catastroID provided by the Catastro office via an API
const catastroID = '2333308DF3823C0093LW';

// Object that stores the attributes of the property
const jsonMetadata = {
    name: catastroID,
    description: "REAT token",
    image: "https://www1.sedecatastro.gob.es/Cartografia/FXCC/FotoFachada.aspx?refcat=2333308DF3823C0093LW&del=8&mun=900&from=OVCListaBienes&captcha=062563206d0974d9dec507c38ba610894690efc5",
    surface: "690m2"
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