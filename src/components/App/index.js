// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import taskData from 'src/data/tasks';

// == Composant
/*
class App extends React.Component {
  render() {
    return (
      <div className="todolist">
        <Form />
      </div>
    );
  }
}
*/

function App() {
  return (
    <div className="todolist">
      <Form />
      <Counter />
    </div>
  );
}
// == Export
export default App;
