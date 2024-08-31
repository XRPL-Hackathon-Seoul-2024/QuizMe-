// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
 
contract QuizFund {
    address owner;
    uint256 fundsAvalable;

    uint256 incentive;

    constructor(address creater){
        owner = creater;
    }

    function fund() public payable  {
        // Only owners can fund
        if(owner != msg.sender) return;

        fundsAvalable += msg.value;
    }

    function setIncentive(uint256 _incentive) public  {
        // Only owners can set incentive
        if(owner != msg.sender) return;

        incentive += _incentive;
    }

    function getPaid(address payable _to) public payable  {
        _to.transfer(incentive);
    }
}

contract QuizFactory {
    QuizFund[] public _QuizFunds;
    uint256 public totalNumberOfQuiz;
    
    function createNewFund() public {
        QuizFund fund = new QuizFund(msg.sender);
        _QuizFunds.push(fund);
        totalNumberOfQuiz += 1;
    }
} 
