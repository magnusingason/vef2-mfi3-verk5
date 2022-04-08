import React from 'react';
import ReactDOM from 'react-dom';
import styles from './registerform.module.css'

class Registerform extends React.Component{
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        window.localStorage.setItem(`${Math.floor(Math.random()* 25)}`, JSON.stringify(this.state) )
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input className={styles.input} type="text" name='name' placeholder="name" onChange={this.handleChange}/>
                </label>
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

export default Registerform;