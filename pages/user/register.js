import Footer from "../../comps/Footer.js";
import Registerform from "../../comps/registerform";
import styles from '../user.module.css';

const register = () => {
    return (
        <div className={styles.wrap}>
            <h1>Register!!</h1>
            <Registerform />
            <Footer />
        </div>
      );
}
 
export default register;