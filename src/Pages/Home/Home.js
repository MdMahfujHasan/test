import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Carousel from './Carousel';
import Contact from './Contact';
import Info from './Info';
import LearnMore from './LearnMore';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Stat from './Stat';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <LearnMore></LearnMore>
            <MakeAppointment></MakeAppointment>
            <Carousel></Carousel>
            <Stat></Stat>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;