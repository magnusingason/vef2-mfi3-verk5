import styles from './Footer.module.css'
import Link from 'next/link'
import Logout from './logout';

let log = true;
const Footer = () => {

    const ISSERVER = typeof window === "undefined";

    if(!ISSERVER) {
        log = localStorage.getItem('loggedIn');
    }

    return ( 
        <div className={styles.border}>
        <Link href="/"><a className={styles.links}>home</a></Link>
        <Link href="/user/register"><a className={styles.links}>register</a></Link>
        <Link href="/user/login"><a className={styles.links}>login</a></Link>
        </div>
     );
}
 
export default Footer;