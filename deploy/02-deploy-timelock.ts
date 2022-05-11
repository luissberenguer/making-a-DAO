import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { MIN_DELAY } from "../helper-hardhat-config";

const deployTimeLock: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying TimeLock...");

  // Consigue el contrato
  const timeLock = await deploy("TimeLock", {
    from: deployer,
    args: [MIN_DELAY, [], []],
    log: true,
    // waitConfirmations,
  });
  log("Deployed Timelock Contract to address: ", timeLock.address);
  // Liga el contrato a tu cuenta...
  // Cossigue tu cuenta desde hardhat

  // Despliega el contrato
};

export default deployTimeLock;
