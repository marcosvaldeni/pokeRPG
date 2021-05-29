import Author from '../components/Author';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Author />
    </>
  );
}

export default Home;
