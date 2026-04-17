import React, { Suspense, useContext} from 'react';
import { Await, useLoaderData } from 'react-router';
import { FriendContext } from '../../../../context/FriendContext';
import Spinner from '../../../../UI/Spinner';

const FriendDetail = () => {
    const friendData = useLoaderData();

    const {handleOnClick, FriendsHistory} = useContext(FriendContext);
    console.log(FriendsHistory);
    

    const statusStyles = {
  overdue: 'badge badge-error rounded-full badge-lg text-white',
  'almost due': 'badge badge-warning rounded-full badge-lg text-slate-950',
  'on-track': 'badge badge-success rounded-full badge-lg text-white',
};

    const {id, name, picture, email, days_since_contact, status, bio, goal, next_due_date, tags} = friendData
    return (

    <div className="p-18 container mx-auto">
      
      {/* MAIN CONTAINER */}
      <div className="flex gap-6">
        
        {/* LEFT SECTION */}
        <div className="w-1/3 flex flex-col gap-4">
          
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-2xl shadow text-center flex flex-col items-center gap-3">
            <img
              src={picture}
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <h2 className="text-lg font-semibold">{name}</h2>

            <span className={statusStyles[status]}>{status}</span>
            
            <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="badge badge-sm p-3 text-slate-700 bg-[#CBFADB] uppercase">{tag}</span>
            ))}
            </div>

            <p className="text-sm italic text-slate-500">
              {bio}
            </p>

            <p className="text-xs text-slate-400">
              {email}
            </p>
          </div>

          {/* Buttons */}
          <button className="btn w-full">Snooze 2 Weeks</button>
          <button className="btn w-full">Archive</button>
          <button className="btn w-full btn-error text-white">Delete</button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-2/3 grid grid-cols-3 gap-4">
          
          {/* Top Stats */}
          <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{days_since_contact}</h2>
            <p className="text-sm text-slate-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{goal}</h2>
            <p className="text-sm text-slate-500">Goal (Days)</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center flex flex-col justify-center">
            <h2 className="text-2xl font-bold">  
                {new Date(next_due_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}
            </h2>
            <p className="text-sm text-slate-500">Next Due</p>
          </div>

          {/* Relationship Goal (col-span-3) */}
          <div className="col-span-3 bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-slate-500">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="btn btn-sm">Edit</button>
          </div>

          {/* Quick Check-in (col-span-3) */}
          <div className="col-span-3 bg-white p-5 rounded-xl shadow">
            <h3 className="mb-4 font-semibold">Quick Check-In</h3>

            <div className="flex gap-4">
              <button onClick={()=>handleOnClick("call", id)} className="flex-1 btn">Call</button>
              <button onClick={()=>handleOnClick("text", id)} className="flex-1 btn">Text</button>
              <button onClick={()=>handleOnClick("video", id)} className="flex-1 btn">Video</button>
            </div>
          </div>

        </div>
      </div>
    </div>



    );
};

export default FriendDetail;