const MyContract = artifacts.require("Transaction");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
