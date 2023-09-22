import React from 'react';

import {
    BlogSection,
    Hero,
    MyLibraryCommunity,
    Community,
    Libraries,
    GetStarted,
    ReligiousSection,
    Books,
    Testimonials,
} from '../components';

const Home = () => {
    return (
        <div>
            <Hero />
            <BlogSection />
            <MyLibraryCommunity />
            <Libraries />
            <GetStarted />
            <Books />
            <ReligiousSection />
            <Community />
            <Testimonials />
        </div>
    );
};

export default Home;

