import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import whatsappIcon from '../imges/icons8-whatsapp-24.png';
import instagramIcon from '../imges/icons8-instagram-24.png';
import twitterIcon from '../imges/icons8-twitter-24.png';

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex flex-wrap justify-content-between align-items-center p-4">
        <div className="col-md-4 d-flex align-items-center">
          <NavLink to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
          </NavLink>
          <span className="mb-3 mb-md-0 text-body-secondary">© israel benisti LLC</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <img src={whatsappIcon} alt="WhatsApp" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <img src={instagramIcon} alt="Instagram" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-body-secondary" href="#">
              <img src={twitterIcon} alt="Twitter" />
            </Link>
          </li>
        </ul>
      </div>
      </footer>
  );
};

export default Footer;