import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const URL = "http://localhost:3001/events";

function App() {
  const [facts, setFacts] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const eveSource = new EventSource(URL);

      eveSource.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setFacts(facts => facts.concat(parsedData));
      };
      
      setListening(true);
    }
  }, [listening]);

  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Fact</th>
          <th>Source</th>
        </tr>
      </thead>

      <tbody>
        {
          facts.map(
            (fact, i) =>
              ( <tr key={i}>
                <td>{fact}</td>
                <td>{"ko co gi"}</td>
              </tr> )
          )
        }
      </tbody>
    </table>
  );
}

export default App;
