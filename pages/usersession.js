import React, {useEffect, useState} from 'react';

const usersession = () => {

    const [userData, setUserData] = useState('');
    
    useEffect(() => {

        let data = localStorage.getItem('userSession');
        if(!data){
            const mainURL = window.location.origin;
            window.location.href= `${mainURL}/user/login`
        }else{
            setUserData(data);
        }

    }, [])

    return ( <div>
        <div>we logged in !</div>
        <Footer />
        </div>
     );

}
 
export default usersession;