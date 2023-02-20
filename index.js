function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Update ID',
      isCompleted: false,
    },
    {
      text: 'Get travel bottles',
      isCompleted: false,
    },
    {
      text: 'Go shopping for New York clothes',
      isCompleted: false,
    },        
    {
      text: 'make itinerary',
      isCompleted: false,
    },   
    {
      text: 'pack clothes',
      isCompleted: false,
    }, 
    {
      text: 'find ways not to panic on first flight',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
