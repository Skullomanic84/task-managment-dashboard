import React from 'react';
import styled from 'styled-components';
import Task from '../Tasks/Task'


//styled - components

const LaneWrapper = styled.div `
text-align: left;
padding: 0;
border-radius: 20px;
min-height: 50vh;
width: 20vw;
margin-left: 20px;
background: #fbc1cc;
box-shadow: 0px 6px 10px rgba(186, 240, 235, 0.555);
transition: all 0.2s;

:hover {
  box-shadow: 0px 6px 10px rgba(186, 240, 235, 0.555);
  transform: scale(1.01);
}

:nth-child(4) {
  background: #1fe4f5;
}

:nth-child(1) {
  background: #b69efe;
}

:nth-last-child(2) {
  background: #60efbc;
}

@media (max-width: 768px) {
  margin-bottom: 5%;
}
`;

const Title = styled.h2 `
width: 100%;
padding-bottom: 10px;
text-align: center;
border-bottom: 1px solid darkGray;
`;

function Lane({ laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
  return (
    <LaneWrapper
    onDragOver={onDragOver}
    onDrop={ (e) => onDrop(e, laneId)}
    >
        <Title>{title}</Title>
        {loading || error ? (<span>{error || 'Loading...'}</span>) : (
          tasks.map((task) => (
            <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart} 
            />
          ))
        )}
    </LaneWrapper>
  );
}

export default Lane;