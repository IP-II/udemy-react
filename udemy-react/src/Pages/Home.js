import React from 'react';
import Footer from '../Componets/Footer/Footer';
import BecomeInstructor from '../Componets/BecomeInstructor/BecomeInstructor';
import FeaturedTopics from '../Componets/FeaturedTopics/FeaturedTopics';
import Header from '../Componets/Header/Header'
import Banner from '../Componets/Banner/Banner/Bannner';
import Carousel from '../Carousel/Carousel';
import Courses from '../Courses/Courses';
import TopCategory from '../TopCategory/TopCategory';

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
    <Banner />
    <Courses />
    <TopCategory />

      <FeaturedTopics />


      <BecomeInstructor />
      <Footer />
    </div>
  )
}

export default Home;
