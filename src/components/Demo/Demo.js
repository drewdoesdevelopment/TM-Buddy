import React from 'react';
import excelDemo from '../../img/excelDemo.png';
import teamDashboard from '../../img/teamDashboard.gif';
import teamAutomate from '../../img/demoAutomate.gif';
import performanceDemo from '../../img/performanceDemo.gif';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';

import { Tools, Speedometer, Phone } from 'react-bootstrap-icons';
import './Demo.scss';

function Demo() {
  return (
    <div className='container-md demo'>
      <h1 className='demo__title'>
        TM Buddy begins the workflow by accepting a raw Excel file of your
        Team’s data
      </h1>
      <img
        src={excelDemo}
        className='container demo__img'
        alt='example excel file'
      ></img>
      <div className='gif__container'>
        <h3>
          TM Buddy then handles the extraction, organization, and rendering of
          your Team’s data
        </h3>
        <img
          src={teamDashboard}
          className='container demo__gif'
          alt='rendered team dashboard'
        ></img>
      </div>
      <div className='gif__container'>
        <h3 className='mt-5'>
          Enabling you to run one-click automated tasks within the app
        </h3>
        <img
          src={teamAutomate}
          className='container demo__gif'
          alt='one-click automation'
        ></img>
      </div>
      <div className='gif__container'>
        <h3 className='mt-5'>
          Making it easy to visualize your team's performance in a format ready
          to be shared
        </h3>
        <img
          src={performanceDemo}
          className='container demo__gif'
          alt='rendering performance table'
        ></img>
      </div>
      <div className='facts'>
        <div className='fact__container'>
          <h2>Why Choose TM Buddy?</h2>
          <p className='mt-4'>
            TM Buddy is built specifically around your enterprise needs, meaning
            customized automation not replicated by other software
          </p>
          <Tools size={70} style={{ color: '#584E6C' }} />
        </div>
        <div className='fact__container'>
          <h2>Built for Performance</h2>
          <p className='mt-3'>
            TM Buddy is built and powered by JavaScript and React, making it an
            incredibly fast and seamless experience
          </p>
          <Speedometer size={80} style={{ color: '#fa9d41' }} />
        </div>
        <div className='fact__container'>
          <h2>Available as Mobile App</h2>
          <p className='mt-3'>
            Extend your enterprise toolkit to mobile devices as TM Buddy is able
            to be ported directly to the Apple App Store & Google Play Store
          </p>
          <Phone size={80} style={{ color: '#5fede6' }} />
        </div>
        <div className='cta'>
          <h2 className='cta__title'>Ready to supercharge your workflow?</h2>
          <Button className='hero__button hero__button--demo'>
            Request Consultation
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
