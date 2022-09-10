import { MetamaskContext } from 'contexts/MetamaskContextProvider';
import { useContext } from 'react';

type ChainProps = {
    id: string;
    name: string;
};
type MetaStateProps = {
    isAvailable: boolean;
    isConnected: boolean;
    account: any[];
    balance?: string;
    chain?: ChainProps;
};
type ContextProps = {
    metaState: MetaStateProps;
    accounts?: any[];
    balance?: string;
    chain?: ChainProps;
    getAccounts: Function;
};
const useMetamaskContext = ():ContextProps => useContext(MetamaskContext) as ContextProps;

export default useMetamaskContext;