const Logout = () => {

    return ( 
        <button class="button" onClick={() => localStorage.setItem("loggedIn", false)}>
            log out
        </button>
     );
}
 
export default Logout;