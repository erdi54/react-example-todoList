import React, { Component } from "react";

export class TodoList extends Component {
  constructor() {
    super();
    this.state = { todoFilter: "All" };
  }
  doneTask = e => {
    this.props.doneTask(e.target.parentNode.id);
  };
  removeTask = e => {
    this.props.removeTask(e.target.parentNode.id);
  };
  todoListFilter = param => {
    this.setState({ todoFilter: param }, function() {
      console.log("state güncellendi");
    });
    const activeBtn = document.getElementById("filterBtn" + param);
    document.getElementById("filterBtnAll").classList.remove("active");
    document.getElementById("filterBtnActive").classList.remove("active");
    document.getElementById("filterBtnCompleted").classList.remove("active");
    activeBtn.classList.add("active");
  };

  render() {
    let items_left = 0;
    const items = this.props.myTask.map((elem, i) => {
      if (
        this.state.todoFilter === "All" ||
        (this.state.todoFilter === "Active" && elem.status === "passive") ||
        (this.state.todoFilter === "Completed" && elem.status === "active")
      ) {
        if (elem.status === "passive") {
          items_left++;
        }
        let task_id = "task_" + i;
        return (
          <li key={i} id={task_id} className={elem.status}>
            <span className="id"> {i + 1}</span>
            <span className="title">{elem.text}</span>
            <span className="type" onClick={this.doneTask}></span>
            <span className="delete" onClick={this.removeTask} />
          </li>
        );
      }
    });
    return (
      <div>
        <div className="todo-list type1">
          <ul>{items}</ul>
        </div>
        <div className="todo-filter type1">
          <div className="left">
            <span>
              <b>{items_left}</b> items left
            </span>
          </div>
          <div className="right" id="listChanger">
            <ul>
              <li className="active" id="filterBtnAll">
                <span onClick={() => this.todoListFilter("All")}>All</span>
              </li>
              <li id="filterBtnActive">
                <span onClick={() => this.todoListFilter("Active")}>
                  Active
                </span>
              </li>
              <li id="filterBtnCompleted">
                <span onClick={() => this.todoListFilter("Completed")}>
                  Completed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
