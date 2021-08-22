import React from 'react';
import excelDemo from '../../img/excelDemo.png';
import './Demo.scss';

function Demo() {
  return (
    <div className='demo'>
      <h1 className='demo__title'>
        TM Buddy begins the workflow by accepting a raw Excel file of your
        Team’s data
      </h1>
      <img src={excelDemo} className='container-xl demo__img'></img>
      <h3>
        TM Buddy then handles the extraction, organization, and rendering of
        your Team’s data
      </h3>
    </div>
  );
}

export default Demo;
