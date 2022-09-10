import addNiCoin from 'actions/addNiCoin';
import Button, { ButtonProps } from '@mui/material/Button';
import NiCoinLogo from 'components/NiCoinLogo';

const AddNiCoinButton:React.FunctionComponent<ButtonProps> = (props = { variant: "contained", color: "success" }) => {
    return <Button {...props} onClick={() => addNiCoin()}>
        <NiCoinLogo width={16} height={16} />
        {' '}
        Add NiCoin
    </Button>
};

export default AddNiCoinButton;
