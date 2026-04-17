import { useState } from 'react';
import { FriendContext } from './FriendContext';

const FriendParam = ({children}) => {

     const [FriendsHistory, setFriendsHistory]= useState([]);

    const handleOnClick = (type, id)=>{
      
      const Friendobj = {
        type,
        friendId :id,
        id: Date.now(),
        time: new Date()
      };

      setFriendsHistory([Friendobj, ...FriendsHistory]);
    }
const contextobj = {
    handleOnClick,
    FriendsHistory,
    setFriendsHistory
}
   
    return <FriendContext.Provider value={contextobj}>
                {children}
            </FriendContext.Provider>
        
};

export default FriendParam;