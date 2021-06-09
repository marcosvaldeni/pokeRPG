import rangerGirl from '../assets/rangerGirl.png'

const Landing: React.FC = () => {
  return (
    <section className="download-landing">
      <div className="container">

        <div>
          <div>
            <img src={rangerGirl} alt="Ranger girl inlustration" />

            <div className="highlight">
              <h1>Thank You!</h1>
            </div>

            <p>
              Your download should start automatically. If it 
              doesn’t, <a href="#">download now</a>.
            </p>

          </div>

          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </h1>

            <p>
              Quisque commodo porta tellus ac posuere. Mauris nisi est, egestas 
              sed lobortis id, consectetur eget magna. Vestibulum iaculis est 
              diam, vel rhoncus enim consectetur at. Donec vitae imperdiet nisl, 
              et ultrices velit. Quisque quis metus odio. Aliquam erat volutpat. 
              Vestibulum ultrices et purus ac pharetra. 
            </p>

            <form className="form" action="">
              <input type="text" />
              <button>Sign up</button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Landing;
