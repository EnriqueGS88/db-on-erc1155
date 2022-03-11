// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MasterREAT_EG is ERC1155, Ownable {
    string baseUri = "https://www.realestatechain.es/api/item/";
    using Counters for Counters.Counter;
    Counters.Counter private _reatAutoId;
    // using Strings for Strings;


    /**
        * @dev The Struct REATData stores all metadata for every token
        * @param REATid acts as the tokenID in the standard ERC-1155
        * @param idCatastr is the property id provided by the Catastro office
        * @param hashJsonToken created by doing keccak256 on json of property metadata
        * @param hashJsonDoc created by doing keccak256 on json of all docs submitted at Catastro office    
     */
    struct REATData {
        uint256 REATid;
        string idCatastro;
        string hashJsonToken;
        string hashJsonDoc;
        bool exists;
    }

    /**
        * @dev a mapping to index all REATData structs created in the contract
     */
    mapping(uint256 => REATData) public reatdata;

    constructor()
        ERC1155("https://www.realestatechain.es/api/item/{id}.json")
    {}

    /**
        * @dev updateMasterUri() sets a new URI for the token type passed as argument
        * @dev where is the OWNER defined ?
        * @param uri_ is the ID that will be set for the token type
        * @notice a new token type is created for every single property
     */
    function updateMasterUri(string memory uri_) public onlyOwner {
        _setURI(uri_);
    }

    

// To be fixed:
//  * baseUri = seems it cannot be read
//  * Strings.toString is not imported correctly

    /**
        * @dev Function to add the tokenId on the URI that's returned
        * @param _tokenId variable passed to assign the ID, that is the token type 
        * @notice it takes the base URI and concatenates the _tokenId and adds ".json" in the end
     */
    function getUri(uint256 _tokenId) public view returns(string memory) {

        return string(
            abi.encodePacked(
                baseUri,
                Strings.toString(_tokenId),
                ".json"
            )
        );
    
    }
    
    /**
        * @dev addREAT() mints the token and updates the token counter
        * @param _idCatastro is the ID to be provided by the Catastro office
        * @param _hashJsonToken is the keccak256 of the property metadata
        * @notice why are passing the parameters as calldata ?
        * @notice token minted with URI property "hashJsonDoc" empty. It'll be added later on
        * @return ID of the struct REATdata that got created/updated
     */
    function addREAT(
        string calldata _idCatastro,
        string calldata _hashJsonToken
    ) public onlyOwner returns (uint256) {
        _reatAutoId.increment();
        uint256 newREATId = _reatAutoId.current();
        _mint(msg.sender, newREATId, 1, "");

        reatdata[newREATId] = REATData(
            newREATId,
            _idCatastro,
            _hashJsonToken,
            "",
            true
        );
        return newREATId;
    }


    /**
        * @dev This function will update the json hash whenever there are updates in property docs
        * @param _id used to search in the reatdata mapping to find the struct that will be updated
        * @param _newHashJsonDoc is the new hash that will replace the hashJsonDoc inside the struct reatdata
     */
    function updateHashJsonDoc(uint256 _id, string calldata _newHashJsonDoc)
        public
        onlyOwner
    {
        require(reatdata[_id].exists == true);
        reatdata[_id].hashJsonDoc = _newHashJsonDoc;
    }
}
