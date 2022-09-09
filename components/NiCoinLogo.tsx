import { FunctionComponent } from "react";

type Props = {
    width?: number;
    height?: number;
};

const NiCoinLogo:FunctionComponent<Props> = ({ width = 32, height = 32 }) => {
    return <img src="https://ipfs.io/ipfs/QmXTAJGy5m6SbcizWs5CtMeQPKzWKo6qhNQfiuCDEN5pB9" {...{ width, height }} alt="Ni! coin logo" />;
}

export default NiCoinLogo;
