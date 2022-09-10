import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const HomeButton:FunctionComponent = () => {
    return <Link href="/" passHref>
        <Button variant="contained" color="info">
            Return to Home
        </Button>
    </Link>;
};

export default HomeButton;
