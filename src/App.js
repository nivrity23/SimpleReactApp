import React from 'react';
import './App.css';
import appData from './data/appData.json'
import Header from './components/Header'

function App() {
  return (
    <div>
      {appData.map(item => (
        <Header listData={item} key={item.level} />
      ))}
    </div>
  );
}

export default App;
