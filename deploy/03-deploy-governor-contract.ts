import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import {
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCENTAGE,
} from "../helper-hardhat-config";

const deployGovernorContract: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const governanceToken = await get("GovernanceToken");
  const timeLock = await get("TimeLock");
  log("Deploying GovernorContract...");
  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: [
      governanceToken.address,
      timeLock.address,
      VOTING_DELAY,
      VOTING_PERIOD,
      QUORUM_PERCENTAGE,
    ],
    log: true,
  });
};

export default deployGovernorContract;
