import { NextPage } from 'next';

export const MetamaskNotFound: NextPage = () => {
    return <>
        <div>Metamask not found</div>
        <div>
            Install the extension from the <a rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">chrome store</a>
        </div>
    </>;
};
