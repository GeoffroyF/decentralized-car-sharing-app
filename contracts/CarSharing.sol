// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.8.12;
pragma experimental ABIEncoderV2;


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
        string description;
        uint seatNumber;
        Seat[] seats;
    }


    constructor() public  {
        //addJourney( "Dijon", "Lyon", "Vers Lyon part Dieu en twingo jaune", 3, generateSeatsForNewJourney(3, ownerAddress));
    }

    mapping(uint => Journey) public candidates;

    function generateSeatsForNewJourney(uint seatNumber, address ownerAddress) public pure returns(Seat[] memory){
        Seat[] memory seats = new Seat[](seatNumber);
        for (uint i = 0; i < seatNumber; i++) {
            seats[i] = Seat(i, true, ownerAddress);
        }
        return seats;
    }

    function addJourney(string memory _departure, 
        string memory _arrival, 
        string memory _description, 
        uint _seatNumber,
        Seat[] memory _seats) private {
        jouneyCount ++;
        candidates[jouneyCount] = Journey(jouneyCount, _arrival, _departure, _description, _seatNumber, _seats);
    }


    // function vote (uint _candidateId) public {
    //     // require that they haven't voted before
    //     require(!voters[msg.sender]);

    //     // require a valid candidate
    //     require(_candidateId > 0 && _candidateId <= jouneyCount);

    //     // record that voter has voted
    //     voters[msg.sender] = true;

    //     // update candidate vote Count
    //     candidates[_candidateId].voteCount ++;
    // }

}
