import React from 'react';
import {
  ArrowBarDown,
  FileEarmarkExcelFill,
  Server,
  BoxArrowInRight,
  Shuffle,
  ClipboardData,
} from 'react-bootstrap-icons';
import './About.scss';

function About() {
  return (
    <div className='container about'>
      <h2 className='about__title'>
        How the <span className='text--secondary'>magic</span> happens
      </h2>
      <ArrowBarDown size={40} style={{ color: '#584E6C' }} />
      <div className='about__icons'>
        <FileEarmarkExcelFill size={60} style={{ color: '#444A37' }} />
        <BoxArrowInRight size={30} style={{ color: '#E5C0DD' }} />
        <Server size={60} style={{ color: '#535477' }} />
        <Shuffle size={30} style={{ color: '#E5C0DD' }} />
        <ClipboardData size={60} style={{ color: '#A8BB90' }} />
      </div>
      <p className='about__text'>
        TM Buddy <span>supercharges</span> your daily workflow by accepting an
        Excel file of raw data, and converting it to a JSON Object to be used
        within the app to automate repetitive tasks
      </p>
    </div>
  );
}

export default About;
