import React, { Component } from "react";

export class TodoForm extends Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  /**
   * task oluşturmak için controller method
   * controller method for creating task
   * @param e
   */
  addTask(e) {
    e.preventDefault();
    const inp = document.getElementById("todoInput");
    const val = inp.value;
    inp.value = " ";
    this.props.addTask(val);
  }
  render() {
    return (
      <div>
        <div className="todo type1">
          <form className="input-wrapper" onSubmit={this.addTask}>
            <input
              id="todoInput"
              type="text"
              className="add-todo"
              name="add-todo"
              autoComplete="off"
              placeholder="What needs to be done?"
            />
          </form>
        </div>

        <button
          type="button"
          className="add-btn"
          onClick={this.addTask}
        ></button>
      </div>
    );
  }
}

export default TodoForm;
