import Button from './Button';

// Display the task description and a delete button. It handles delete unwanted or completed task.
export default function ToDoTask({ task, index, handleDeleteTask }) {
  return (
    <div className='todo-task'>
      <span>{task}</span>
      <Button
        onClick={() => handleDeleteTask(index)}
        label='Delete'
        className='delete-btn'
      />
    </div>
  );
}
