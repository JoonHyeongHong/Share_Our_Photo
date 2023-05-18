import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './counter';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={() => <div>안녕하세요</div>} />
        <Route exact path="/counter" element={() => <Counter />} />
      </Routes>
    </div>
  );
}

export default App;
