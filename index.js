import React from 'react';
import ReactDOM from 'react-dom/client';
function App(){
  return(
    <div>
      <h1> Lamborghini fan page</h1>
      <h2>why i like lamborghini</h2>

      <p>LAMBORGHINI I LIKE THEM </p>
      <h2>Top Features</h2>
      <ul>
        <li>Design aesthetics</li>
        <li>Speed</li>
        <li>Best revving engine</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


