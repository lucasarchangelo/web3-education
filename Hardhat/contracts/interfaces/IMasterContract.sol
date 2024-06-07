// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IMasterContract {
    function updateStepByIndex(
        address userAddress,
        uint index,
        string memory name,
        address contractAddress,
        bool easyWay
    ) external;

    function getUserName(address userAddress) external view returns (string memory name);
}
