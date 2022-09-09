import { /*ProviderProps,*/ useCallback, useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import { NextPage } from 'next';

import { MetamaskStateProvider, useMetamask } from "use-metamask";
import Button from '@mui/material/Button';

// import { ethers } from 'ethers'
// import Web3 from 'web3'

type ChildrenProps = { children: React.ReactElement };
type NextPageWithChildren = NextPage<ChildrenProps>;

const MetamaskNotFound: NextPage = () => {
    return <>
        <div>Metamask not found</div>
        <div>
            Install the extension from the <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">chrome store</a>
        </div>
    </>
};

const MetamaskNotConnected: NextPage = () => {
    const { /*connect,*/ getAccounts } = useMetamask();
    // const connectMetamask = async () => {
    //     // var result = await connect(ethers);
    //     var result = await connect(Web3);
    //     alert(JSON.stringify(result));
    // };
    const connectMetamask = async () => {
        // return alert(2);
        // connect(ethers).then(() => alert('connected?')).catch(err => console.error(err));

        // // From https://docs.ethers.io/v5/getting-started/#getting-started--connecting
        // // A Web3Provider wraps a standard Web3 provider, which is
        // // what MetaMask injects as window.ethereum into each page
        // const provider = new ethers.providers.Web3Provider((window as any || {}).ethereum)

        // // MetaMask requires requesting permission to connect users accounts
        // const response = await provider.send("eth_requestAccounts", []);

        // console.log('eth_requestAccounts: ', response);

        // var response = await getAccounts();
        var response = await getAccounts({ requestPermission: true });
        console.log('getAccounts: ', response);
    };

    return <div>
        Metamask is not currently connected.
        <br/>
        {/* <Button onClick={() => connect(ethers)}>Connect Metamask</Button> */}
        <Button onClick={() => connectMetamask()}>Connect Metamask</Button>
    </div>
};

const MetamaskStatusSwitcher: NextPageWithChildren = ({ children }) => {
    const { metaState, getAccounts, getChain } = useMetamask();
    const [accounts, setAccounts] = useState<{}[]>();
    const [chain, setChain] = useState<{ id: any, name: string }>();

    const loadAccounts = useCallback(async () => {
        var _accounts = await getAccounts(/*{ requestPermission: true }*/);
        console.log('loadAccounts: ', _accounts);
        setAccounts(_accounts);
    },[metaState,setAccounts]);
    const loadChain = useCallback(async () => {
        var _chain = await getChain();
        console.log('loadChain: ', _chain);
        setChain(_chain);
    },[metaState,setChain]);

    useEffect(() => {
        loadAccounts();
        loadChain(); 
    },[]);

    return (
        !metaState.isAvailable ? <MetamaskNotFound /> :
        !metaState.isConnected ? <MetamaskNotConnected /> :
        !chain ? <div>No chain</div> :
        !accounts?.length ? <div>No accounts ... please add in Metamask</div> :
        //!accounts?.length ? <MetamaskNotConnected /> :
        //children
        <>
            {/* <h4>Accounts</h4>
            <div>{JSON.stringify(accounts)}</div>
            <h4>Chain</h4>
            <div>{JSON.stringify(chain)}</div> */}
            {children}
        </>
        );
};

const MetamaskProvider: NextPageWithChildren = ({children}) => {
    return <MetamaskStateProvider>
        <MetamaskStatusSwitcher>
            {children}
        </MetamaskStatusSwitcher>
    </MetamaskStateProvider>;
};

export default MetamaskProvider;
