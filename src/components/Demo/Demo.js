import React from 'react';
import excelDemo from '../../img/excelDemo.png';
import teamDashboard from '../../img/teamDashboard.gif';
import teamAutomate from '../../img/demoAutomate.gif';
import performanceDemo from '../../img/performanceDemo.gif';

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
      <img src={teamDashboard} className='container demo__gif--team'></img>
      <h3 className='mt-5'>
        Enabling you to run one-click automated tasks within the app
      </h3>
      <img src={teamAutomate} className='container demo__gif--team'></img>
      <h3 className='mt-5'>
        TM Buddy makes it easy to visualize your team's performance in a format
        ready to be shared
      </h3>
      <img src={performanceDemo} className='container demo__gif--team'></img>
    </div>
  );
}

export default Demo;
