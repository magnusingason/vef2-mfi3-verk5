import { Link } from 'react-router';
import Footer from '../../comps/Footer.js';
import Loginform from '../../comps/loginform';
import styles from '../user.module.css';

const login = () => {
    return ( 
        <><div className={styles.wrap}>
            <h1>Log in !</h1>

            local storage keeps track if youre logged in or not. You can log out through button in index.
        
        <Loginform />
        <Footer />
        </div>
            </>
     );
}
 
export default login;