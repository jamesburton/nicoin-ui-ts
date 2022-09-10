import { MetamaskStateProvider } from 'use-metamask';
import { useMetamask } from "use-metamask";
import { createContext, useCallback, useState, useEffect, FunctionComponent, ReactElement } from 'react';
import getBalance from 'actions/getBalance';

export const MetamaskContext = createContext({});

type PropsWithChildren = {
    children: ReactElement;
};
export const MetamaskContextProviderFromState:FunctionComponent<PropsWithChildren> = ({children}) => {
    const { metaState, getAccounts, getChain } = useMetamask();
    //const [accounts, setAccounts] = useState<any[]>();
    const accounts = metaState.account;
    const [balance, setBalance] = useState<string|null>();
    //const [chain, setChain] = useState<{ id: any, name: string }>();
    const chain = metaState.chain;
    const [chainId, setChainId] = useState<number|null>();

    const loadBalance = useCallback(async (address:string) => {
        var _balance = await getBalance(address);
        console.log('loadBalance: ', _balance);
        setBalance(_balance);
    },[setBalance,getBalance]);
    const loadAccounts = useCallback(async () => {
        var _accounts = await getAccounts(/*{ requestPermission: true }*/);
        console.log('loadAccounts: ', _accounts);
        if(_accounts?.length)
            loadBalance(_accounts[0]);
    },[loadBalance]);
    const loadChain = useCallback(async () => {
        var _chain = await getChain();
        console.log('loadChain: ', _chain);
        setChainId(_chain.id);
    },[]);

    const listenForMetamaskChanges = useCallback(() => {
        (window as any).ethereum.on('accountsChanged', () => {
            console.log('accountsChanged');
            loadAccounts();
            // loadChain();
        });
        (window as any).ethereum.on('networkChanged', () => {
            console.log('networkChanged');
            // loadAccounts();
            loadChain();
        });
    },[]);
    
    useEffect(() => {
        loadAccounts();
        loadChain();
        // See https://web3js.readthedocs.io/en/v1.2.11/web3-eth-subscribe.html
        // alert(JSON.stringify(Object.getOwnPropertyNames(metaState)));
        // alert(JSON.stringify(Object.getOwnPropertyNames((window as any).ethereum)));
        // alert(JSON.stringify(!!metaState.web3));
        // const subscription = metaState.web3.eth.subscribe('changed', function (...args:any[]) {
        //     console.log('Web3:changed args=', ...args);
        // });
        // return () => subscription.unsubscribe();
        listenForMetamaskChanges();
    },[]);
    
    const value = {
        metaState,
        accounts,
        chain,
        balance,
        getAccounts, // Included as this triggers metamask to connect
        getBalance, // Included to trigger refreshing the balance
        getChain, // Included to trigger refreshing the chain
    };
    return <MetamaskContext.Provider value={value} children={children} />;
}

export const MetamaskContextProvider:FunctionComponent<{children:ReactElement}> = ({children}) => {
    return <MetamaskStateProvider>
        <MetamaskContextProviderFromState {...{children}} />
    </MetamaskStateProvider>;
};

export default MetamaskContextProvider;
