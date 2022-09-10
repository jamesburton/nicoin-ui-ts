import useMetamaskContext from 'hooks/useMetamaskContext';
import { MetamaskNotFound } from './MetamaskNotFound';
import { MetamaskNotConnected } from './MetamaskNotConnected';
import { FunctionComponent, ReactElement } from 'react';

type Props = {
    children?: ReactElement;
};

export const MetamaskStatusSwitcher:FunctionComponent<Props> = ({children}) => {
    const { metaState, chain, accounts } = useMetamaskContext();
    return <>{
        !metaState.isAvailable ? <MetamaskNotFound /> :
            !metaState.isConnected ? <MetamaskNotConnected /> :
                !chain ? <div>No chain</div> :
                    !accounts?.length ? <div>No accounts ... please add in Metamask</div> :
                        children
    }</>;
}