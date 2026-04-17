import { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';


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

      if(type=="call"){
        toast.success(`successful call`);

      }else if(type == "video"){
        toast.success("successful video");


      }else if(type == "text"){
        toast.success("successful text");

      }
      
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