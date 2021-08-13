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
        <Github size={32} />
        <Facebook size={32} />
        <Linkedin size={32} />
      </div>
    </div>
  );
}

export default Footer;
