import React, {useState, createContext} from 'react';


const initialData = {
    userLoggedIn: !!localStorage.getItem('token'),
}

const authInitial = {
    state: initialData,
    setState: () => {},
}

const Context = createContext(authInitial);

const UserProvider = ({children}) => {
    const userLoggedIn = state => {
        console.log(state)
        // setState(authInitial, initialData.userLoggedIn)
    }
    // return <Context.Provider value={children}>{children}</Context.Provider>

}

export default Context
// export default UserProvider

