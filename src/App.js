import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myTask: [
        { text: "yapılcak işler", status: "passive" },
        { text: "kitap oku", status: "passive" },
        { text: "filim izle", status: "passive" },
        { text: "Erken uyu", status: "passive" }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }
  addTask(task) {
    let updatedList = this.state.myTask;
    updatedList.push({ text: task, status: "passive" });
    this.setState({ tasks: updatedList });
    // this.updateLocalStorage(updatedList);
  }
  doneTask(task_id) {
    let updatedList = this.state.myTask;
    let currentStatus = updatedList[task_id.replace("task_", "")].status;
    let newStatus = "active";
    if (currentStatus === "active") {
      newStatus = "passive";
    }
    updatedList[task_id.replace("task_", "")].status = newStatus;
    this.setState({ tasks: updatedList });
    // this.updateLocalStorage(updatedList);
  }
  removeTask(task_id) {
    let updatedList = this.state.myTask;
    updatedList.splice(task_id.replace("task_", ""), 1);
    this.setState({ myTask: updatedList });
    // this.updateLocalStorage(updatedList);
  }
  render() {
    return (
      <div className="content">
        <Header />
        <TodoForm addTask={this.addTask} />
        <TodoList
          myTask={this.state.myTask}
          doneTask={this.doneTask}
          removeTask={this.removeTask}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
