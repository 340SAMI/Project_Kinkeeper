import React from 'react';
import Banner from './Components/Banner/Banner';
import FriendSection from './Components/FriendSection/FriendSection';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <FriendSection></FriendSection>
        </div>
    );
};

export default Home;