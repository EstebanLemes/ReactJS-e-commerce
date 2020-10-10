import React, {useState} from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const [token, setToken] = useState([]);

    return(
        <AppContext.Provider value={[token, setToken]}>
            {props.children}
        </AppContext.Provider>
    )
};