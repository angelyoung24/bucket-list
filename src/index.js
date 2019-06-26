import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    return ( <div >
        <ToDoList / >
        </div>
        );
}

function ToDoList() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [finishedTodos, setFinishedTodos] = React.useState([]);

  function addTodo() {
    setTodos([...todos, text]);
    setText("");
  }

  function finishTodo(todo) {
    setFinishedTodos([...finishedTodos, todo]);
  }

  function startTodo(todo) {
    setFinishedTodos(
      finishedTodos.filter(finishedTodo => finishedTodo !== todo)
    );
  }

  return (
    <div>
      <h1>Bucket List</h1>
      {todos.map(todo => {
        const isDone = finishedTodos.includes(todo);
        return (
          <h3 key={todo}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={function(e) {
                isDone ? startTodo(todo) : finishTodo(todo);
              }}
            />
            {isDone ? <del>{todo}</del> : todo}  
          </h3>
        );
      })}

      <input
        value={text}
        onChange={function(e) {
          setText(e.target.value);
        }}
      />

      <button disabled={!text} onClick={addTodo}>
        Add!
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

