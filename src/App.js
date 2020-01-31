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
  
  render() {
    return (
      <div>
        <div className="header">React Todo List</div>

        <div className="task-add-and-task-ul">

          <h2>Add Task:</h2>

          <form className="task-input-form">
            <input
              type="text"
              placeholder="press enter to log task"
              className="add-task-input"
              value={this.state.currentTodo}
              onChange={this.handleChange('currentTodo')}
              onKeyPress={this.handleSubmit}>
            </input>
          </form>

          <h1>All Tasks:</h1>
          <ul className="task-ul">
            {this.state.todoItems.map((item, idx) =>
            <li key={idx}>
              <input
                type="checkbox"
                className="task-checkbox"></input>
              {item}
            </li>
            )}

          </ul>

        </div>

      </div>
    );
  }

}

export default App;