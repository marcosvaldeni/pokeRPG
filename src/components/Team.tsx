import john from '../assets/img/john.png';

const Team: React.FC = () => {
  return (
    <section className="team">
      <div className="highlight">
        <h1>Team</h1>
      </div>

      <p>
        This is the paragraph where you can write more details about your team. 
        Keep you user engaged by providing meaningful information.
      </p>

      <div className="cards">

        <article>
          <header>
            <img src={john} alt="John" />
            <h4>John Locke</h4>
            <h5>Hunter</h5>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
            turpis magna, iaculis vel ipsum id, rutrum sollicitudin orci. 
            Pellentesque a tincidunt nibh. Mauris non est a mauris pretium 
            consectetur. Aenean sed nisi diam.
          </p>
        </article>

        <article>
          <header>
          <img src={john} alt="John" />
            <h4>John Locke</h4>
            <h5>Hunter</h5>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
            turpis magna, iaculis vel ipsum id, rutrum sollicitudin orci. 
            Pellentesque a tincidunt nibh. Mauris non est a mauris pretium 
            consectetur. Aenean sed nisi diam.
          </p>
        </article>

        <article>
          <header>
          <img src={john} alt="John" />
            <h4>John Locke</h4>
            <h5>Hunter</h5>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
            turpis magna, iaculis vel ipsum id, rutrum sollicitudin orci. 
            Pellentesque a tincidunt nibh. Mauris non est a mauris pretium 
            consectetur. Aenean sed nisi diam.
          </p>
        </article>

      </div>

    </section>
  );
} 

export default Team;
