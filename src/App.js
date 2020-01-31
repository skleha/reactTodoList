import React from 'react';
import './styleSheets/styling.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      currentTodo: "",
      todoItems: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }


  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value});
    }
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
    e.preventDefault();
    this.state.todoItems.push(this.state.currentTodo);
    this.setState({currentTodo: ""});
    }
  }
  
  keyPressed(e) {
    if (e.key === "Enter") {
      return this.handleSubmit(e);
    }
  }


  render() {
    return (
      <div>
        <div className="header">Task Lister</div>

        <div className="task-add-and-task-ul">

          <h2>Add Task:</h2>

          <form className="task-input-form">
            <input
              type="text"
              placeholder="whaddya gotta do?"
              className="add-task-input"
              value={this.state.currentTodo}
              onChange={this.handleChange('currentTodo')}
              onKeyPress={this.handleSubmit}>
            </input>
          </form>

          <h1>All Tasks:</h1>
          <ul>
            {this.state.todoItems.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}

          </ul>

        </div>

      </div>
    );
  }

}

export default App;