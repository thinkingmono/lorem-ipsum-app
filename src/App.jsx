import { useState } from "react";
import { nanoid } from "nanoid";
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let numbCount = parseInt(count);
    setText(data.slice(0, numbCount));
  }

  return (
    <section className="section-center">
      <h4>Lorem Ipsum Generator</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="paragraph">Paragraph</label>
          <input type="number" id='paragraph' name='paragraph' min='1' max='8' step='1' value={count} onChange={handleChange} />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text && text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  );
};
export default App;
