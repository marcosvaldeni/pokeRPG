import rockets from '../assets/rockets.png';

const NotFound: React.FC = () => {
  return (
    <section className="not-found">
      <div className="container">

        <h1>Are you lost?!...</h1>
        <div>
          <img src={rockets} alt="Team Rocket" />

          <div>
            <div className="highlight">
              <h1>404</h1>
            </div>
            <h2>Page not found!</h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NotFound;
