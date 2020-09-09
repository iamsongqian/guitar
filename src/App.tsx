import React, { useRef, useState, useEffect } from 'react';

function useCallbackState(value: any) {
  const [state, setState] = useState<any>(value);
  const cbRef: any = useRef();
  useEffect(() => {
    cbRef.current && cbRef.current(state);
  }, [state]);
  return [
    state,
    (d: any, callback: any) => {
      cbRef.current = callback;
      setState(d);
    }
  ];
}

function App() {
  const [name, setName] = useCallbackState('11');
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setName('21', (name: any) => console.log(name))}>{name}</button>
      </header>
    </div>
  );
}

export default App;
