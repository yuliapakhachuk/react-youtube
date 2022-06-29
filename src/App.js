import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodos";
import { ShowText } from "./Todo/ShowText";
import { Counter } from "./Todo/Counter";



function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Придбати хліб"},
    {id: 2, completed: false, title: "Придбати сир"},
    {id: 3, completed: false, title: "Придбати масло"},
  ])


  function toggleTodo(id) {

    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) { 
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) { 
    setTodos(todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ?  <TodoList todos={todos} onToggle={ toggleTodo }/> : <p>No todos!</p>}
      </div>


      <ShowText />
      
      <Counter/>
    </Context.Provider>
  
  );
}




export default App;
