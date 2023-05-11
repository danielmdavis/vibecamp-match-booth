'use client'
import React, { useState, useReducer } from 'react'

import Creds from './credsComponent'
import Question from './questionComponent'
import Submit from './submitComponent'
import End from './endComponent'
import Error from './errorComponent'

import questions from './questions.json'
import matchData from './matches.json'

export default function Home() {

  let [pageCounter, setPageCounter] = useState(0)

  let [secretKey, setKey] = useState('')
  let [contact, setContact] = useState('')
  let [creds, setCreds] = useState({})

  let [matches, setMatches] = useState({})

  let [voted, setVoted] = useState(false)

  let [voteArray, setVoteArray] = useState([])

  const handleMatches = () => {
    if (matchData[secretKey] === undefined) {
      setPageCounter(500)
    } else {
      setMatches(matchData[secretKey])
      setPageCounter(pageCounter += 1)
    }
  }

  const handleVote = (question, choice) => {
    // console.log(choice)
    setVoteArray(voteArray => [...voteArray, {[question]: choice}])
    console.log(creds)
    console.log(voteArray)
    setPageCounter(pageCounter += 1)
  }

  const handleVoted = () => {
    setVoted(true)
  }

  const currentQuestion = questions.find(i => i.id === pageCounter)

  let currentComponent
  let lastComponent
  if (pageCounter < 1) {
    currentComponent = <Creds key={0} secretKey={secretKey} setKey={setKey} handleMatches={handleMatches}/>
  } else if (pageCounter === 500) {
    currentComponent = <Error key={500} />
  } else if (currentQuestion !== undefined && pageCounter !== 500) {
    currentComponent = <Question key={pageCounter} question={currentQuestion} questionId={pageCounter} handleVote={handleVote} />
  } else if (voted === false) {
    currentComponent = <Submit key={1008} creds={creds} voteArray={voteArray} voted={handleVoted} matches={matches} />
  } else {
    currentComponent = <End key={1009} />
  }

  console.log(pageCounter)

  return (
    <main>
      <div className='header'>LoveBot Match Booth</div>
      {currentComponent}
    </main>
  )
}
