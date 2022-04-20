module.exports = async ({ deployments }) => {
  const { deploy, log } = deployments;
  const namedAccounts = await getNamedAccounts();
  const { admin } = namedAccounts;
  const deployResult = await deploy("VFOX", {
    from: admin,
    contract: "VFOX",
  });
  if (deployResult.newlyDeployed) {
    log(
      `contract VFOX deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed} gas`
    );
  }
};
module.exports.tags = ["VFOX"];
