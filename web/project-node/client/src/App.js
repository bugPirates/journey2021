import React from 'react';
import './App.css';

function App() {
    return ( 
      <div className="App">
        <h1> Data </h1>

    <div className="form"> 
        <label>Movie Name:</label>
            <input type="text" name="movieaName" />
            <label>Review:</label>
            <input type="text" name="review" />
        <button> Submit </button> 
        </div> 
    </div>
    );
}

export default App;