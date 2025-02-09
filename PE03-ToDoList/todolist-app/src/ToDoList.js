import ToDoTask from './ToDoTask';

// maps through the tasks array and renders a ToDoTask component for each task in the list.
export default function ToDoList({ tasks, handleDeleteTask }) {
  return (
    <div className='todo-list'>
      {tasks.map((task, index) => (
        <ToDoTask
          key={index}
          task={task}
          index={index}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
