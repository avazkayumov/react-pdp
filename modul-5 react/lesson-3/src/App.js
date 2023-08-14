import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
          setLoading(false)
          setTodos(json)
        } )
  }, [])

  return (
    <div className="App">
        <h1>Hello</h1>
          {
            loading ? <h2>Loading...</h2> : (
            <ul>
                  {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
            )}
    </div>
  );
}

export default App;
