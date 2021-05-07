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
    count: 0,
    tasks: tasksData,
  }

  render() {
    const { count, tasks } = this.state;
    return (
      <div className="todolist">
        <Form />
        <Counter count={count} />
        <List tasks={tasks} />
      </div>
    );
  }
}
// == Export
export default App;
