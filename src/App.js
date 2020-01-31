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
    e.preventDefault();
    this.state.todoItems.push(this.state.currentTodo);
    this.setState({currentTodo: ""});
  }
  
  render() {
    return (
      <div>
        <div className="header">Task Lister</div>

        <h1>Add Task</h1>

        <form>
          <input
            type="text"
            placeholder="whaddya gotta do?"
            value={this.state.currentTodo}
            onChange={this.handleChange('currentTodo')}>
          </input>

          <input
            type="submit"
            value="Click to Add"
            onClick={this.handleSubmit}>
          </input>

        </form>

        <h1>All Tasks:</h1>

        <ul>
          {this.state.todoItems.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}

        </ul>


      </div>
    );
  }

}


export default App;