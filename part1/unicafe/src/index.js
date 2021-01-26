import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)



const Statistic = ({ value }) => {
  return (
    <div>
      {value}
    </div>
  )
}

const Statistics = (props) => {

  const {good, bad, neutral, all, average, positive} = props.stats

  return all === 0 ? (
    <div>
      No feedback given
    </div>
  ) : (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td><Statistic value={good} /></td>
          </tr>
          <tr>
            <td>neutral</td>
            <td><Statistic value={neutral} /></td>
          </tr>
          <tr>
            <td>bad</td>
            <td><Statistic value={bad}/></td>
          </tr>
          <tr>
            <td>all</td>
            <Statistic value={all}/>
          </tr>
          <tr>
            <td>average</td>
            <Statistic value={average}/>
          </tr>
          <tr>
            <td>positive</td>
            <Statistic value={positive}/>
          </tr>
          
        </tbody>
      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const average = (good + bad + neutral) / 3
  const positive = all ? (good * 100) / all : 0

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics stats={{good, bad, neutral, all, average, positive}}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
