import React from 'react';
import './App.css';

function App() {

  return (
    <div>
      <h1>Task List</h1>

      <form>
        <input
          type="text"
          placeholder="whaddya gotta do?">
        </input>

        <input
          type="submit"
          value="Click to Add">
        </input>
      
      </form>


    </div>
  );
}

export default App;
