// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./classes/Register.sol";
import "./interfaces/IMasterContract.sol";

contract MasterRegister {

    string constant NAME = "Register";
    uint constant INDEX = 0;
    
    IMasterContract public masterContract;
    
    constructor(address _masterContract) {
        masterContract = IMasterContract(_masterContract);
    }

    modifier onlyUser() {
        require(bytes(masterContract.getUserName(msg.sender)).length == 0, "You need to create a user first.");
        _;
    }

    function validateStep(
        address contractAddress
    ) external onlyUser {
        Register register = Register(contractAddress);

        register.setInfo("[MasterRegister] Validating Register contract.");
        register.getInfo();
        masterContract.updateStepByIndex(msg.sender, INDEX, NAME, contractAddress, false);
    }

    function deployEasyWay(string memory message) external onlyUser {
        Register register = new Register();
        register.setInfo(message);
        masterContract.updateStepByIndex(msg.sender, INDEX, NAME, address(register), true);
    }   
}