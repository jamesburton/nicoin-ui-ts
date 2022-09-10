import type { FunctionComponent } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Spacer from './Spacer';

const SiteFooter:FunctionComponent = () => {
    return <footer className={styles.footer}>
        <a
        href="https://bit.ly/3QM2649"
        target="_blank"
        rel="noopener noreferrer"
        >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="https://ipfs.io/ipfs/QmXTAJGy5m6SbcizWs5CtMeQPKzWKo6qhNQfiuCDEN5pB9" alt="Ni! Coin Logo" width={16} height={16} />
            </span>
        </a>
        <Spacer />
        <a href='/terms'>Terms &amp; Conditions</a>
        <Spacer />
        <a href='/privacy'>Privacy</a>
    </footer>;
}

export default SiteFooter;

