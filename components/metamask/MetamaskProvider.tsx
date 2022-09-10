import 'regenerator-runtime/runtime';

import MetamaskContextProvider from 'contexts/MetamaskContextProvider';
import { FunctionComponent, ReactElement } from 'react';
import { MetamaskStatusSwitcher } from './MetamaskStatusSwitcher';

type Props = {
    children: ReactElement;
};
const MetamaskProvider: FunctionComponent<Props> = ({children}) => {
    return <MetamaskContextProvider>
        <MetamaskStatusSwitcher>
            {children}
        </MetamaskStatusSwitcher>
    </MetamaskContextProvider>;
};

export default MetamaskProvider;
