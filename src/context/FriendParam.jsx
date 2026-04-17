import React, { createContext } from 'react';

const  FriendContext = createContext();

const FriendParam = ({children}) => {
   
    return <FriendContext.Provider>
        {children}
    </FriendContext.Provider>
        
};

export default FriendParam;