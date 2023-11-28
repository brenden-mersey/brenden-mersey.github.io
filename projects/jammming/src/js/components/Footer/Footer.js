import React from 'react';
import './Footer.scss';

const copyrightYear = new Date();

function Footer() {

  return (
    <footer className="footer" id="footer">
      <div className="footer__container grid-container">
        <p className="footer__legal">&copy; <span>{copyrightYear.getFullYear()}</span> Brenden Mersey. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;