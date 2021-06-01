import author from '../assets/img/author.jpg';

const Author: React.FC = () => {
  return (
    <section className="author">
      <div className="highlight">
        <h1>Author</h1>
      </div>

      <div>

        <img src={author} alt="Author of the project" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo 
            porta tellus ac posuere. Mauris nisi est, egestas sed lobortis id, 
            consectetur eget magna. Vestibulum iaculis est diam, vel rhoncus enim 
            consectetur at. Donec vitae imperdiet nisl, et ultrices velit. Quisque 
            quis metus odio. 
          </p>
          <p>
            Aliquam erat volutpat. Vestibulum ultrices et purus ac pharetra. Praesent 
            iaculis pulvinar justo, nec eleifend eros pretium quis. Pellentesque 
            ligula leo, blandit id placerat non, molestie et ex. Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac turpis 
            egestas. Quisque malesuada eros felis, consequat gravida felis sodales id.
          </p>

          <p>
            Aliquam erat volutpat. Vestibulum ultrices et purus ac pharetra. 
            Praesent iaculis pulvinar justo, nec eleifend eros pretium quis. 
            Pellentesque ligula leo, blandit id placerat non, molestie et ex. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas. Quisque malesuada eros felis, consequat gravida 
            felis sodales id.
          </p>
        </div>

      </div>
      
      <div className="quote">
        <p>
          “Design is not just what it looks like and feels like. Design is how 
          it works.” <strong>Steve Jobs</strong>
        </p>
      </div>

      <div className="endline"></div>
    </section>
  );
}

export default Author;
