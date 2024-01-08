// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract astronaut is ERC721A{

    address public owner;

    uint256 public max = 5;

    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmetNL6CNN8e3J46i7Af4wmy5xm9u8AqUqQ6xz1S1kkeXs";

    
    string public prompt =
        "astronaut running on ice";

    constructor() ERC721A("astronaut", "LR") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        if(totalSupply() + quantity > max){
         revert ("5 is maximum that you can mint");
        } 
        _mint(msg.sender, quantity);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
