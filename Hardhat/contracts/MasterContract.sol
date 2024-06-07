// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract MasterContract is AccessControl {

    bytes32 public constant MASTER_ROLE = keccak256("MASTER_ROLE");

    struct Step {
        string name;
        address contractAddress;
        bool easyWay;
        bool completed;
    }

    struct UserInfo {
        string name;
        Step [] steps;
    }

    mapping(address => UserInfo) public users;

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function createUser(string memory name) external {
        users[msg.sender].name = name;
    }

    function getUserName(address userAddress) external view returns (string memory) {
        return users[userAddress].name;
    }

    function getStepByIndex(address userAddress, uint index) external view returns (Step memory) {
        return users[userAddress].steps[index];
    }

    function updateStepByIndex(address userAddress, uint index, string memory name, address contractAddress, bool easyWay) external onlyRole(MASTER_ROLE) {
        require(users[userAddress].steps[index].completed, "You already completed this step.");
        
        users[userAddress].steps[index].name = name;
        users[userAddress].steps[index].contractAddress = contractAddress;
        users[userAddress].steps[index].easyWay = easyWay;
        users[userAddress].steps[index].completed = true;
    }
}
