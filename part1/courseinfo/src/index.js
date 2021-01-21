import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return <p>{props.name} {props.exercise}</p>
}
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  const [part1, part2, part3] = props.part
  return (
    <div>
      <Part name={part1.name} exercise={part1.exercises}/>
      <Part name={part2.name} exercise={part2.exercises}/>
      <Part name={part3.name} exercise={part3.exercises}/>
    </div>
  )
}

/* const Total = (props) => {
  return <p>Number of exercises: {props.total}</p>
} */

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course['name']}/>
      <Content part={course['parts']} />
      {/* <Total parts={course.parts} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
