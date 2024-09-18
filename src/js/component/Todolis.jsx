import React, { useState, } from 'react'

const Todolis= () => {
  const [tasks, setTasks] = useState([]); //Lista de tareas
  const [newTask, setNewTask] = useState(""); // nueva tarea que se esta escribiendo
 
  
  //para agregar una nueva lista
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Limpiar el cuadro de texto
    }
  };

  // para eliminar  una tarea
  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove); //toma la lista de tarea y crea una nueva lista que no incluye la tarea que estas eliminando
    setTasks(updatedTasks);
  };
   
   // Detectar la tecla Enter y agregar tarea
   const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita que el formulario se recargue si estuviera dentro de un form
      addTask();
      
    }
  };

  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li >
            {task}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <footer>
      <p>Total tasks: {tasks.length}</p>
      </footer>
    </div>
     
  )
};

export default Todolis;