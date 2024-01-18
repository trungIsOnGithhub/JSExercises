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
    }
  }, [facts, listening]);

  return (

  );
}

export default App;
