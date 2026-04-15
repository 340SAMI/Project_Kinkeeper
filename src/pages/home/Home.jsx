import React, { Suspense } from 'react';
import Banner from './Components/Banner/Banner';
import FriendSection from './Components/FriendSection/FriendSection';
import Spinner from '../../UI/Spinner';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <Suspense fallback={<Spinner></Spinner>}>
                <FriendSection></FriendSection>
            </Suspense>
        </div>
    );
};

export default Home;