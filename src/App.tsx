import React, { useEffect } from 'react';
import './App.css';
function App(props: any) {
  useEffect(() => {
    const aa = (props || 0) + 1;
    console.log(aa);
  }, [props]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
