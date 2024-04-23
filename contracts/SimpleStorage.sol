// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract SimpleStorage {
    uint public storedData;

    constructor(uint initialValue) {
        storedData = initialValue;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}