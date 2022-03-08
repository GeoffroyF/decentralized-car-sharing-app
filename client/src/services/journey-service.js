import $ from 'jquery'; 
//import TruffleContract from "./truffle-contract"
//var CarSharing = artifacts.require("./CarSharing.sol");

class JourneyService {

    constructor() {
        //super(props);
    }

    

    initContract(web3) {

        //const carSharing = JSON.parse("CarSharing.json");
        $.getJSON("../CarSharing.json", function(carSharing) {
            let contract = new web3.eth.Contract(carSharing, '0x7641aD281a1CA5d439d2CE35aA1b9019740575D6');
            console.log(contract);
        });



        // $.getJSON("Election.json", function(election) {
        // // Instantiate a new truffle contract from the artifact
        // App.contracts.Election = TruffleContract(election);
        // // Connect provider to interact with contract
        // App.contracts.Election.setProvider(App.web3Provider);

        // return App.render();
        // });



        // CarSharing.deployed().then(function(instance) {
        //     carSharingInstance = instance;
        //     carSharingInstance.addJourney( "Dijon", "Lyon", "Vers Lyon part Dieu en twingo jaune", 3, carSharingInstance.generateSeatsForNewJourney(3, ownerAddress));
        //   })
          // const contract = web3.eth.TruffleContract(carSharing)
        // console.log(contract);
        // Instantiate a new truffle contract from the artifact

        // web3.eth.Contract()


        // App.contracts.Journey = TruffleContract(journey);
        // // Connect provider to interact with contract
        // App.contracts.Journey.setProvider(App.web3Provider);

        // return App.render();
    };


    // createNewJourney() {
    //     var candidateId = $('#candidatesSelect').val();
    //     App.contracts.Journey.deployed().then(function(instance) {
    //       return instance.vote(candidateId, { from: App.account });
    //     }).then(function(result) {
    //       // Wait for votes to update
    //       $("#content").hide();
    //       $("#loader").show();
    //     }).catch(function(err) {
    //       console.error(err);
    //     });
    // }
    

    // getJourneys() {
    //     // Load contract data
    //     App.contracts.Journey.deployed().then(function(instance) {
    //         electionInstance = instance;
    //         return electionInstance.candidatesCount();
    //     }).then(function(candidatesCount) {
    //         var candidatesResults = $("#candidatesResults");
    //         candidatesResults.empty();
        
    //         var candidatesSelect = $('#candidatesSelect');
    //         candidatesSelect.empty();
        
    //         for (var i = 1; i <= candidatesCount; i++) {
    //         electionInstance.candidates(i).then(function(candidate) {
    //         var id = candidate[0];
    //         var name = candidate[1];
    //         var voteCount = candidate[2];
    
    //         // Render candidate Result
    //         var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
    //         candidatesResults.append(candidateTemplate);
    
    //         // Render candidate ballot option
    //         var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
    //         candidatesSelect.append(candidateOption);
    //       });
    //     }
    //     return electionInstance.voters(App.account);
    //   }).then(function(hasVoted) {
    //     // Do not allow a user to vote
    //     if(hasVoted) {
    //       $('form').hide();
    //     }
    //     loader.hide();
    //     content.show();
    //     successMessage.show();
    //   }).catch(function(error) {
    //     console.warn(error);
    //   });
    // }                       

}

export default JourneyService;
