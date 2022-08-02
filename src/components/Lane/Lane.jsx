import React from 'react'
import Task from '../Tasks/Task.jsx'
import './Lane.css'


function Lane({ title, loading, error, tasks }) {
  return (
    <div className='card'>
        <h2>{title}</h2>
        {loading || error ? (<span>{error || 'Loading...'}</span>) : (
          tasks.map((task) => (
            <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body} 
            />
          ))
        )}
    </div>
  )
}

export default Lane