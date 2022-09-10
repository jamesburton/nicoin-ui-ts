import "dotenv"
const infuraKey = process.env.INFURA_KEY;
// const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const NodeUrls = {};

const infuraNetworks = ['mainnet','rinkeby','kovan','ropsten','goerli','sepolia','aurora','aurora-test','near','near-test'];
if(infuraKey?.length)
    infuraNetworks.forEach(network => NodeUrls[network] = `https://${network}.infura.io/v3/${INFURA_KEY}`);

export const NiCoinContractAddresses = {
    "mainnet": "0x0eFC93ceB0fd8409c8cb98649a8821ccFe576a62",
    "rinkeby": "0x78D23c808d08E98D62fCCeb24a9861E82b8f2e68",
    "kovan": undefined,
    "ropsten": undefined,
    "goerl": undefined,
    "sepolia": undefined,
    "aurora": "0x72F4bDaf56b0d9581A09eAA6C2dab5F5907F655d",
    "aurora-test": undefined,
    "near": undefined,
    "near-test": undefined,
};
