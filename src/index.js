import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <ToDoList />
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
      <Container fixed>
        <Typography className='h2' variant='h2' gutterBottom>
          Bucket List
        </Typography>
        {todos.map(todo => {
          const isDone = finishedTodos.includes(todo);
          return (
            <Typography className='h6' variant='h6' gutterBottomkey={todo}>
              <input
                type='checkbox'
                checked={isDone}
                onChange={function(e) {
                  isDone ? startTodo(todo) : finishTodo(todo);
                }}
              />
              {isDone ? <del>{todo}</del> : todo}
            </Typography>
          );
        })}

        <input
          value={text}
          onChange={function(e) {
            setText(e.target.value);
          }}
        />

        <Fab color='secondary' size='small' disabled={!text} onClick={addTodo}>
          <AddIcon />
        </Fab>
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
