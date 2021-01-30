import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, parts) =>
    sum + parts.exercises, 0)

  return (
    <p><b>Number of exercises {total}</b></p>
  )
}

const Part = (props) => {
  return (
    <li>
      {props.name} {props.exercises}
    </li>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map(part => 
          <Part 
            key={part.id} 
            name={part.name} 
            exercises={part.exercises}
          />
        )}
      </ul> 
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']} />
    </div>
  )
}

export default Course