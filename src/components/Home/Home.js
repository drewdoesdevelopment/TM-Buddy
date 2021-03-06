import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as HeroSvg } from '../../img/hero-img.svg';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './Home.scss';

function Home() {
  return (
    <div className='hero'>
      <div className='container hero__content'>
        <h1 className='hero__title'>
          TM Buddy handles your team's data, and automates your daily tasks
        </h1>
        <Link to='/demo'>
          <Button className='hero__button'>Launch Demo</Button>
        </Link>
      </div>
      <div className='container hero__image'>
        <HeroSvg className='hero__img' />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Home;
