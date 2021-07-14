const Contribute: React.FC = () => {
  return (
    <section className="contribute">
      <div className="container">

        <h2>Help us to keep PokeRPG free to download, share and use by contributing to...</h2>
        
        <div className="contribution-container">

          <div>
            <p>To Author</p>
            <div>
              <input name="author" type="range" />
              <span>$ 5.00</span>
            </div>
          </div>

          <div>
            <p>To The Website</p>
            <div>
              <input name="website" type="range" />
              <span>$ 5.00</span>
            </div>
          </div>

          <div>
            <p>To The Plataform</p>
            <div>
              <input name="plataform" type="range" />
              <span>$ 5.00</span>
            </div>
          </div>

          <div className="contribution-sender">
            <button>Contribute with PayPal</button>
            <p>Your contribution</p>
            <span>$ 15.00</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contribute;
