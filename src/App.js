import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      todoItems: []
    }
  }

  handleInput(item) {
    return(e) => {
      this.state.todoItems.push(e.target.value);
    }
  }
  
  render() {
    return (
      <div>
        <h1>Add Task</h1>

        <form>
          <input type="text" placeholder="whaddya gotta do?"></input>

          <input type="submit" value="Click to Add"></input>
        </form>

      </div>
    );
  }

}


export default App;
