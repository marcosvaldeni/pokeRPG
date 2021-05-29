import { 
  FaInstagram,
  FaTwitterSquare,
  FaDiscord,
  FaTwitch,
  FaYoutubeSquare
} from 'react-icons/fa';

import rangers from '../assets/rangers.png'

const Landing: React.FC = () => {
  return (
    <section className="landing">
      <div>

        <img src={rangers} alt="Two Pokémon rangers" />

        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
          <p>
            Quisque commodo porta tellus ac posuere. Mauris nisi est, egestas sed
            lobortis id, consectetur eget magna. Vestibulum iaculis est diam, vel 
            rhoncus enim consectetur at. Donec vitae imperdiet nisl, et ultrices 
            velit. Quisque quis metus odio. Aliquam erat volutpat. Vestibulum 
            ultrices et purus ac pharetra. 
          </p>
          <button>Download</button>
        </div>

      </div>

      <ul>
        <li><FaInstagram /></li>
        <li><FaTwitterSquare /></li>
        <li><FaDiscord /></li>
        <li><FaInstagram /></li>
        <li><FaTwitch /></li>
        <li><FaYoutubeSquare /></li>
      </ul>
    </section>
  );
}

export default Landing;
