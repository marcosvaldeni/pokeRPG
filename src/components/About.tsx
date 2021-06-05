import detective from '../assets/detectiveGirl.png';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="highlight">
        <h1>About</h1>
      </div>

      <h2>Etiam luctus, nulla vitae congue efficitur</h2>

      <article>
        <img src={detective} alt="Detective girl inlustration" />

        <div>

          <p>
            Integer dignissim rutrum neque, ac viverra leo condimentum id. 
            Proin rutrum velit erat, congue porta erat mattis ut. Morbi eu 
            velit ut mi dapibus iaculis. Donec hendrerit arcu sed eros sagittis 
            lacinia. Duis ligula quam, eleifend at sollicitudin in, vestibulum 
            vitae nisl. Vestibulum pharetra rutrum risus, et vestibulum urna. 
            Curabitur non lectus ullamcorper, dictum elit condimentum, mollis 
            velit.
          </p>

          <p>
            Integer dignissim rutrum neque, ac viverra leo condimentum id. 
            Proin rutrum velit erat, congue porta erat mattis ut. Morbi eu 
            velit ut mi dapibus iaculis. Donec hendrerit arcu sed eros sagittis 
            lacinia. Duis ligula quam, eleifend at sollicitudin in, vestibulum 
            vitae nisl. Vestibulum pharetra rutrum risus, et vestibulum urna. 
            Curabitur non lectus ullamcorper, dictum elit condimentum, mollis 
            velit.
          </p>

          <p>
            Integer dignissim rutrum neque, ac viverra leo condimentum id. 
            Proin rutrum velit erat, congue porta erat mattis ut. Morbi eu 
            velit ut mi dapibus iaculis. Donec hendrerit arcu sed eros sagittis 
            lacinia. Duis ligula quam, eleifend at sollicitudin in, vestibulum 
            vitae nisl. Vestibulum pharetra rutrum risus, et vestibulum urna. 
            Curabitur non lectus ullamcorper, dictum elit condimentum, mollis 
            velit.
          </p>

        </div>
      </article>

        <div className="quote">
          <p>
            “Me, give up? No way!” <strong>Ash</strong>
          </p>
        </div>


    </section>
  );
}

export default About;
