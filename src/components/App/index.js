// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import tasksData from 'src/data/tasks';

// == Composant

class App extends React.Component {
  state = {
    tasks: tasksData,
    taskLabel: '',
  };

  // fonction en charge d'ajouter une tache
  addTask = () => {
    const { taskLabel, tasks } = this.state;

    const ids = tasks.map((task) => task.id);
    const id = Math.max(...ids);
    const newTask = {
      id: id + 1,
      label: taskLabel,
      done: false,
    };
    this.setState({
      tasks: [...tasks, newTask],
      taskLabel: '',
    });
  }

  // fonction en charge du changement de state tasklabel
  setTaskLabel = (value) => {
    this.setState({
      taskLabel: value,
    });
  }

  changeTaskDone = (taskId) => {
    // ici on change la valeur de la task
    const { tasks } = this.state;
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newTask = {
          ...task,
          done: !task.done,
        };

        return newTask;
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { tasks, taskLabel } = this.state;
    // eslint-disable-next-line arrow-body-style
    const undoneTasks = tasks.filter((task) => !task.done);


    return (
      <div className="todolist">
        <Form
          onFormSubmit={this.addTask}
          inputValue={taskLabel}
          onChangeInputValue={this.setTaskLabel}
        />
        <Counter count={undoneTasks.length} />
        <List
          tasks={tasks}
          onChangeTaskDone={this.changeTaskDone}
        />
      </div>
    );
  }
}
// == Export
export default App;
