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
    const paragraphs = data.slice(0, count);
    console.log(paragraphs);
    setText(paragraphs);
  }

  return (
    <div>
      <h2>Lorem Ipsum Starter</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="paragraph" className="form-label">Paragraph</label>
          <input type="number" className="form-input" id='paragraph' name='paragraph' min='1' max='8' step='1' value={count} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-block">Generate</button>
      </form>
      <div style={{padding: '2% 5%', textAlign: 'justify'}}>
        {text && text.map((item) => {
          return <p key={nanoid()} style={{marginBottom: '10px', lineHeight: '1.5em'}}>{item}</p>
        })}
      </div>
    </div>
  );
};
export default App;
