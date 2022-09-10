import { NextPage } from 'next';
import useMetamaskContext from 'hooks/useMetamaskContext';
import Button from '@mui/material/Button';

export const MetamaskNotConnected: NextPage = () => {
    const { /*connect,*/ getAccounts } = useMetamaskContext();
    const connectMetamask = async () => {
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
        <br />
        {/* <Button onClick={() => connect(ethers)}>Connect Metamask</Button> */}
        <Button onClick={() => connectMetamask()}>Connect Metamask</Button>
    </div>;
};
