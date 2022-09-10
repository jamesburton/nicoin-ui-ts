import { ethers, providers } from 'ethers';
import NiCoinConfig from 'config/NiCoin-trimmed';
import type EthereumProvider from 'types/EthereumProvider';

// const { ethereum } : { ethereum: providers.ExternalProvider } = (window || {}) as any;

export default async function getBalance(address:string):Promise<string|null> {
    //const { ethereum } : { ethereum: providers.ExternalProvider } = (window || {}) as any;
    const { ethereum } : { ethereum: EthereumProvider } = (window || {}) as any;
    // const tokenAddress = '0x0eFC93ceB0fd8409c8cb98649a8821ccFe576a62';
    const tokenAddress = 'ni-coin.eth';
    // const tokenSymbol = 'NI!';
    const tokenDecimals = 18;
    // const tokenImage = 'https://ipfs.io/ipfs/QmXTAJGy5m6SbcizWs5CtMeQPKzWKo6qhNQfiuCDEN5pB9?filename=nicoin.svg';

    try {
        // From https://docs.ethers.io/v5/getting-started/#getting-started--connecting
        console.log('... getting ethereum provider');
        const provider = new providers.Web3Provider(ethereum);
        console.log('... got provider ', provider); 
        // const signer = provider.getSigner();
        const contract = new ethers.Contract(tokenAddress, NiCoinConfig.abi, provider);
        // const contract = new ethers.Contract(tokenAddress, NiCoinConfig.abi, signer);
        const tokenName = await contract.name();
        const tokenSymbol = await contract.symbol();
        // const balance = await contract.balanceOf('codeconsultants.eth');
        const balance = await contract.balanceOf(address);
        console.log(`- Balance ${tokenName} (${tokenSymbol}): ${ethers.utils.formatUnits(balance, tokenDecimals)}`);

        return ethers.utils.formatUnits(balance, tokenDecimals);
    } catch (error) {
        console.log(error);
        // return false;
        return null;
    }
};
