import React from 'react';
import excelDemo from '../../img/excelDemo.png';
import teamDashboard from '../../img/teamDashboard.gif';
import teamAutomate from '../../img/demoAutomate.gif';
import performanceDemo from '../../img/performanceDemo.gif';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';

import { Tools, Speedometer2, Phone } from 'react-bootstrap-icons';
import './Demo.scss';

function Demo() {
  return (
    <div className='container-md demo'>
      <h1 className='demo__title'>
        TM Buddy begins the workflow by accepting a raw Excel file of your
        Team’s data
      </h1>
      <img src={excelDemo} className='container demo__img'></img>
      <h3>
        TM Buddy then handles the extraction, organization, and rendering of
        your Team’s data
      </h3>
      <img src={teamDashboard} className='container demo__gif'></img>
      <div className='gif__container'>
        <h3 className='mt-5'>
          Enabling you to run one-click automated tasks within the app
        </h3>
        <img src={teamAutomate} className='container demo__gif'></img>
      </div>
      <div className='gif__container'>
        <h3 className='mt-5'>
          Making it easy to visualize your team's performance in a format ready
          to be shared
        </h3>
        <img src={performanceDemo} className='container demo__gif'></img>
      </div>
      <div className='facts'>
        <div className='fact__container'>
          <h2>Why Choose TM Buddy?</h2>
          <h3 className='mt-4'>
            TM Buddy is built specifically around your enterprise needs, meaning
            customized automation not replicated by other software
          </h3>
          <Tools size={70} style={{ color: '#584E6C' }} />
        </div>
        <div className='fact__container'>
          <h2>It's Really Fast</h2>
          <h3 className='mt-4'>
            TM Buddy is built and powered by JavaScript and React, making it an
            incredibly fast and seamless experience
          </h3>
          <Speedometer2 size={80} style={{ color: '#fa9d41' }} />
        </div>
        <div className='fact__container'>
          <h2>Available as Mobile App</h2>
          <h3 className='mt-4'>
            Extend your enterprise toolkit to mobile devices as TM Buddy is
            capable of being available on the Apple and Android App Store
          </h3>
          <Phone size={80} style={{ color: '#5fede6' }} />
        </div>
        <div className='cta'>
          <h3>Ready to supercharge your workflow?</h3>
          <Button className='hero__button'>Request Consultation</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
