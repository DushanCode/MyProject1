import React from 'react';

import {
    BlogSection,
    Hero,
    MyLibraryCommunity,
    Community,
} from '../components';

const Home = () => {
    return (
        <div>
            <Hero />
            <BlogSection />
            <MyLibraryCommunity />
            <Community />
        </div>
    );
};

export default Home;


