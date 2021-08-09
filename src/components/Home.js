import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.scss';

function Home() {
  return (
    <div className='hero__area'>
      <div className='container hero__content'>
        <h1>
          TM Buddy handles your team's data, and automates your daily tasks
        </h1>
        <Button className='primary-button'>Launch Demo</Button>
      </div>
    </div>
  );
}

export default Home;
