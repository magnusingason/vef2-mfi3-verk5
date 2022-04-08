import login from "../pages/user/login";
import React from 'react';
import styles from './loginform.module.css'

class Loginform extends React.Component{
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        for(let i = 0; i < 26; i++){
            let id = JSON.parse(localStorage.getItem(`${i}`));
            if(id && this.state){
                if(this.state.username === id.username){
                    if(this.state.password === id.password){
                        console.log("login worked");
                        localStorage.setItem("loggedIn", true);
                        break;
                        
                    }
                }else if(id){
                    console.log("incorrect username or password");
                    localStorage.setItem("loggedIn", false);
                }
            }
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input className={styles.input} type="text" name='username' placeholder="username" onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input className={styles.input} type="password" name='password' placeholder="password" onChange={this.handleChange}/>
                </label>
                <input className={styles.submit} type="submit" value="Submit" />
            </form>
        )
    }
}
export default Loginform;
