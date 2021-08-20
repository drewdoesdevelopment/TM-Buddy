import React from 'react';
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <p>
        <span>Drew Develops</span> | 2021
      </p>
      <div className='footer__social'>
        <a href={'https://github.com/drewdoesdevelopment'} target='_blank'>
          <Github size={32} />
        </a>
        <a href={'https://www.facebook.com/drewdevelops/'} target='_blank'>
          <Facebook size={32} />
        </a>
        <a href={'https://www.linkedin.com/in/drewpfeiler/'} target='_blank'>
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
