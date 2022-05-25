const DMessage = artifacts.require("DMessage");

module.exports = async function (deployer) {
  await deployer.deploy(DMessage);
};
