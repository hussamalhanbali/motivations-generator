import { useState, useEffect } from "react";
import quotesArray from "./api/api";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  };

  const generateQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <div className="Quote">
        <h3>ADVICE #45</h3>
        <p>"{quote}"</p>
        <div className="Logo">
          {
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          }
        </div>
      </div>
      <div className="btn">
        <button onClick={generateQuote}>
          {
            <svg
              id="Group_1061"
              data-name="Group 1061"
              xmlns="http://www.w3.org/2000/svg"
              width="29.903"
              height="21.178"
              viewBox="0 0 29.903 21.178"
            >
              <path
                id="Path_275"
                data-name="Path 275"
                d="M6.915,0a6.761,6.761,0,0,1,7.029,6.612,22.753,22.753,0,0,1-.7,5.474,10.373,10.373,0,0,1-3.435,5.059c-2.476,2.3-7.756,4.033-7.756,4.033s5.635-7.407,4.382-7.407C2.617,13.771,0,10.735,0,6.915A6.915,6.915,0,0,1,6.915,0Z"
                fill="#16111a"
              />
              <path
                id="Path_276"
                data-name="Path 276"
                d="M6.915,0a6.761,6.761,0,0,1,7.029,6.612,22.753,22.753,0,0,1-.7,5.474,10.373,10.373,0,0,1-3.435,5.059c-2.476,2.3-7.756,4.033-7.756,4.033s5.635-7.407,4.382-7.407C2.617,13.771,0,10.735,0,6.915A6.915,6.915,0,0,1,6.915,0Z"
                transform="translate(15.959)"
                fill="#16111a"
              />
            </svg>
          }
        </button>
      </div>
      <img src="./techover-logo.png" alt="Logo" className="logo1" />
    </div>
  );
}

export default App;
