// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.8.12;

contract CarSharing {

    uint public jouneyCount;


    struct Seat {
        uint id;
        bool isForSale;
        address seat_owner;
    }

    struct Journey {
        uint id;
        string departure;
        string arrival;
        string descrption;
        uint seatNumber;
        Seat[] seats;
    }


    constructor() public {
        Journey(jouneyCount, "Dijon", "Lyon", "Vers Lyon part Dieu en twingo jaune", 3, Seat());
    }

    mapping(uint => Journey) public candidates;
    mapping(address => bool) public voters;

    function generateSeatsForNewJourney(uint memory seatNumber) {
        Seat[] memory a = new Seat[];
        for (i = 0; i<seatNumber; i++) {
            seats[i] = Seat(i, )
        }
    }

    function addCandidate(string memory _name) private {
        jouneyCount ++;
        candidates[jouneyCount] = Journey(jouneyCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= jouneyCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;
    }

}
