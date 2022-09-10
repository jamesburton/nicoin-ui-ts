// import { ethers, providers } from 'ethers';
// import NiCoinConfig from 'config/NiCoin-trimmed';
import type EthereumProvider from 'types/EthereumProvider';

// const { ethereum } : { ethereum: providers.ExternalProvider } = (window || {}) as any;

export default async function addNiCoin() {
    //const { ethereum } : { ethereum: providers.ExternalProvider } = (window || {}) as any;
    const { ethereum } : { ethereum: EthereumProvider } = (window || {}) as any;
    // const tokenAddress = '0x0eFC93ceB0fd8409c8cb98649a8821ccFe576a62';
    const tokenAddress = 'ni-coin.eth';
    const tokenSymbol = 'NI!';
    const tokenDecimals = 18;
    const tokenImage = 'https://ipfs.io/ipfs/QmXTAJGy5m6SbcizWs5CtMeQPKzWKo6qhNQfiuCDEN5pB9?filename=nicoin.svg';

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = ethereum?.request && await (ethereum.request as any)({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
            },
        });

        // // From https://docs.ethers.io/v5/getting-started/#getting-started--connecting
        // console.log('... getting ethereum provider');
        // const provider = new providers.Web3Provider(ethereum);
        // console.log('... got provider ', provider); 
        // // // const signer = provider.getSigner();
        // // const contract = new ethers.Contract(tokenAddress, NiCoinConfig.abi, provider);
        // // // const contract = new ethers.Contract(tokenAddress, NiCoinConfig.abi, signer);
        // // const tokenSymbol = await contract.symbol();
        // // // const balance = await contract.balanceOf('codeconsultants.eth');
        // // // console.log(`- Balance: ${ethers.utils.formatUnits(balance, tokenDecimals)}`);
        
        // // // SEND ETH:- const tx = await signer.sendTransaction({ to: "codeconsultants.eth", value: ethers.utils.parseEther("1.0") });

        // // // const signedContract = niCoinContract.connect(signer);
        // // // const ni = ethers.utils.parse("1.0", tokenDecimals);
        // // // const wasAdded = await signedContract.transfer("codeconsultants.eth", ni);
        
        // // // See https://github.com/ethers-io/ethers.js/issues/3109#issuecomment-1166496858
        // const params = [{
        //     type: 'ERC20', // Initially only supports ERC20, but eventually more!
        //     options: {
        //         address: tokenAddress, // The address that the token is at.
        //         symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        //         decimals: tokenDecimals, // The number of decimals in the token
        //         image: tokenImage, // A string url of the token logo
        //     },
        // }];
        // console.log('wallet_watchAsset params:', params);
        // const wasAdded = await provider.send('wallet_watchAsset', params);
        // console.log('watchAsset sent, response=', wasAdded);

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('Your loss!');
        }

        return wasAdded;
    } catch (error) {
        console.log(error);
        return false;
    }
};
