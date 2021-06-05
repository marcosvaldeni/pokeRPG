import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="mainHeader">
      <div>

        <img src={logo} alt="Logo" />

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/download">Download</a></li>
            <li><a href="/suport">Suport us</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>

        </nav>
          {isOpen 
            ? <FaTimes onClick={toggleHandler} />
            : <FaBars onClick={toggleHandler} />
          }
      </div>
    </header>
  );
}

export default Header;
