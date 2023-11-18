// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TestContract {
  string message;
  
  constructor() public {
    message = "hello world!";
  }

  function sayHello() public view returns (string memory) {
    return message;
  }
}
