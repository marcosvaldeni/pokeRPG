import { 
  FaInstagram,
  FaTwitterSquare,
  FaDiscord,
  FaTwitch,
  FaYoutubeSquare
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
     
        <div>
          <div className="footer-desc">
            <h1>PokeRPG</h1>

            <p>
              The best design for your web studio website. Vitae nulla nunc euismod 
              vel pretium tellus accumsan semper. Vitae nulla nunc euismod vel 
              pretium tellus accumsan semper. 
            </p>
          </div>

          <div className="footer-links">

            <div>
              <h2>Pages</h2>

              <ul>
                <li>Home</li>
                <li>Download</li>
                <li>Support us</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h2>Follow us</h2>
              <ul>
                <li><FaInstagram /></li>
                <li><FaTwitterSquare /></li>
                <li><FaDiscord /></li>
                <li><FaTwitch /></li>
                <li><FaYoutubeSquare /></li>
              </ul>

              <h2>Our Illustrator</h2>
              <p>Boone Carlyle</p>
            </div>

          </div>
        </div>


        <div className="footer-info">
          <p>2021 © All Rights Reserved.</p>
          <p>UX by <strong>Marcos Valdeni Lucas</strong></p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
