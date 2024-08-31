# QUIZ ME!

## XRPL Hackathon Track 3.

## How I used Root Network

    I used Root Network via it's EVM function.

## Frontend

### wagmi.js

https://wagmi.sh/

used wagmi js to connect with metamask and create frontend environment.

## Blockchain

### remix

https://remix.ethereum.org/

used remix IDE with/ injected Metamask to connect with Root Network testnet.

## What contract did i wrote?

1.  Factory contract which creates each Quiz Fund contract.

        contract QuizFactory {
            QuizFund[] public \_QuizFunds;
            uint256 public totalNumberOfQuiz;

            function createNewFund() public {
                QuizFund fund = new QuizFund(msg.sender);
                _QuizFunds.push(fund);
                totalNumberOfQuiz += 1;
            }

        }

2.  Quiz Fund Contract

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

## Where did I deploy it?

    Root Network Porcini Testnet

## Quiz Factory contract

    https://porcini.rootscan.io/addresses/0x4F0bff0b0d556a95b3B8c4a59c0a8EC4E857A182
