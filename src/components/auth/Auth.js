import React, {useEffect, useState} from 'react';
import fbApp from '../config/fbConfig';

export const AuthContext = React.createContext();

export const AuthProvider =({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    let userID = '';

    if(currentUser != null){
        userID = currentUser.uid;
    }
    

    useEffect(() => {
        fbApp.auth().onAuthStateChanged(setCurrentUser);
        console.log('From auth: ', currentUser)
    }, []);

    return(
        <AuthContext.Provider value={{currentUser, userID }}>
            {children}
        </AuthContext.Provider>
    );
};