import React, { use } from 'react';
import Friend from './Friend';

const friendsDataPromise = fetch('/friendsData.json').then((res) => res.json());

const FriendSection = () => {
  const friendsData = use(friendsDataPromise);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-8 max-w-7xl mx-auto">
      {friendsData.map((friendData) => (
        <Friend key={friendData.id} friendData={friendData} />
      ))}
    </div>
  );
};

export default FriendSection;
