import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/config";

// module.exports = {
//   solidity: "0.8.8",
// };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.8",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
