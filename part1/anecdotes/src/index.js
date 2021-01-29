import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Winner = ({anecdote, points}) => (
  <div>
  <p>{anecdote}</p>
  <p>has {points} votes</p>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

  const handleClick = () => {
    const index = Math.floor(Math.random() * 6)
    setSelected(index)
  }

  const winner = () => {
    let max = 0;
    for (const vote in votes) {
      if (votes[vote] > votes[max]) {
        max = vote;
      }
    }
    return max;
  }

  const indexOfWinner = winner();

  const handleVote = () => {
    const copy = { ...votes }
    copy[selected] += 1 
    setVotes(copy)
    winner()
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleClick} text='next anecdote' />
      <Button onClick={handleVote} text='vote' />
      <h1>Anecdote with the most votes</h1>
      <Winner anecdote={anecdotes[indexOfWinner]} points={votes[indexOfWinner]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)