import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Button from './Button.js';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState(''); // Initial task is an empty string
  const [tasks, setTasks] = useState([]); // Empty task list
  const [error, setError] = useState(''); // State to track error messages

  // "Add task" button will display an error msg when task field is empty. Otherwise, task will get added on to the ToDoList.
  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      setError("Task can't be blank. Please enter a valid task!"); // Set error message if input is empty
      return;
    }

    setTasks([...tasks, taskInput]); // Add new task
    setTaskInput(''); // Clear input field
    setError(''); // Clear error message
  };

  // locate the unwanted task to delete and remove it from the ToDoList
  const handleDeleteTask = (indexToDeleteTask) => {
    const updatedTasks = [
      ...tasks.slice(0, indexToDeleteTask), // Include all tasks before the index
      ...tasks.slice(indexToDeleteTask + 1), // Include all tasks after the index
    ];
    setTasks(updatedTasks); // Update state with modified array
  };

  return (
    <div className='App'>
      <h1>ToDo List App</h1>
      <div className='input-container'>
        <input
          type='text'
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder='Enter task description'
        />
        <Button onClick={handleAddTask} label='Add Task' className='add-btn' />
      </div>
      {error && <p className='error-message'>{error}</p>}{' '}
      <ToDoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
