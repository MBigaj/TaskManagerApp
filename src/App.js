import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Program for 30 minutes',
        day: 'Feb 6th at 1:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Help mum',
        day: 'January 5th at 9:30am',
        reminder: true
    },
    {
        id: 3,
        text: 'Start preparing for Xmas',
        day: 'December 2nd at 7:00pm',
        reminder: true
    }
])

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
