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
        <FileEarmarkExcelFill
          size={60}
          style={{ color: '#444A37' }}
          className='about__icons--medium'
        />
        <BoxArrowInRight
          size={30}
          style={{ color: '#E5C0DD' }}
          className='about__icons--small'
        />
        <Server
          size={60}
          style={{ color: '#535477' }}
          className='about__icons--medium'
        />
        <Shuffle
          size={30}
          style={{ color: '#E5C0DD' }}
          className='about__icons--small'
        />
        <ClipboardData
          size={60}
          style={{ color: '#A8BB90' }}
          className='about__icons--medium'
        />
      </div>
      <div className='container'>
        <p className='about__text'>
          TM Buddy <span>supercharges</span> your daily workflow by accepting an
          Excel file of raw data, and converting it to JSON format to be used
          within the app to automate repetitive tasks
        </p>
      </div>
    </div>
  );
}

export default About;
