import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

const config: HardhatUserConfig = {
	solidity: {
		compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
	},
	defaultNetwork: "hardhat",
	networks: {
		goerli: {
			url: process.env.GOERLI_RPC_URL || "https://eth-goreli/example",
			accounts: [process.env.GOERLI_PRIVATE_KEY || "0xkey"],
			chainId: 5,
			// blockConfirmations: 6,
		},
		// * RUNNING HARDHAT NETWORK ON LOCALHOST SERVER
		localhost: {
			url: process.env.LOCALHOST_URL,
			// *ACCOUNTS ALREADY GIVEN.
			chainId: 31337, //* SAME AS HARDHAT CHAINID
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY || "key",
	},
	gasReporter: {
		enabled: true,
		outputFile: "gas-report.txt",
		noColors: true,
		currency: "USD",
		coinmarketcap: process.env.COINMARKETCAP_API_KEY || "key",
		// ! TO CHANGE NETWORK BELOW
		// token: "MATIC",
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
	},
};

export default config;
