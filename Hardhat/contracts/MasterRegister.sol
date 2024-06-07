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
        require(masterContract.getUserName(msg.sender) != "", "You need to create a user first.");
        _;
    }

    function validateStep(
        address contractAddress
    ) external onlyUser {
        Register register = Register(contractAddress);

        try {
            register.setInfo("[MasterRegister] Validating Register contract.");
            register.getInfo();
        } catch {
            revert("This is not a Register contract.");
        }

        try {
            masterContract.updateStepByIndex(msg.sender, INDEX, NAME, contractAddress, false);
        } catch {
            revert("You already completed this step.");
        }
    }

    function deployEasyWay(string message) external onlyUser {
        Register register = new Register();
        register.setInfo(message);

        try {
            masterContract.updateStepByIndex(msg.sender, INDEX, NAME, address(register), true);
        } catch {
            revert("You already completed this step.");
        }
    }   
}