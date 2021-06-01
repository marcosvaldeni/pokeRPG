import About from '../components/About';
import Author from '../components/Author';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Author />
      <Team />
      <About />
      <Footer />
    </>
  );
}

export default Home;
