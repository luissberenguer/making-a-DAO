import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployGovernanceToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // getNamedAccounts -> importamos accounts de nuestra configuracion de hardhat
  const { getNamedAccounts, deployments, network } = hre;
};

export default deployGovernanceToken;
