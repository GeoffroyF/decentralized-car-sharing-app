var CarSharing = artifacts.require("./CarSharing.sol");

module.exports = function(deployer) {
  deployer.deploy(CarSharing);
};
