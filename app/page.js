'use client'
import React, { useState, useReducer } from 'react'

import Creds from './credsComponent'
import Question from './questionComponent'
import Submit from './submitComponent'
import End from './endComponent'
import EndGood from './endGoodComponent'
import Error from './errorComponent'

import questions from './questions.json'
import matchData from './matches.json'

// to dos

// Email to matches
// - Content: “Hi there! \n We think that you’d be a great match for Alice Mottola. Want to know who she really is, deep down? 

// Other
// - Reload the page after 30s 
// - Add jingle playing on loop: https://drive.google.com/file/d/1XiTgchx9qOQBhNEsS3uZjh2RcWsdV2dv/view?usp=sharing 


export default function Home() {

  let [pageCounter, setPageCounter] = useState(0)

  let [secretKey, setKey] = useState('')
  let [creds, setCreds] = useState({})

  let [matches, setMatches] = useState({})
  let [voted, setVoted] = useState('')
  let [currString, setCurrString] = useState('')
  let [voteArray, setVoteArray] = useState([])

  let [canClick, setCanClick] = useState(false)


  const handleMatches = () => {
    if (matchData[secretKey] === undefined) {
      setPageCounter(500)
    } else {
      setMatches(matchData[secretKey])
      setPageCounter(pageCounter += 1)
    }
  }

  const handleVote = (question, choice) => {
    setVoteArray(voteArray => [...voteArray, {[question]: choice}])
    setPageCounter(pageCounter += 1)
  }

  const handleVotedYes = () => {
    setVoted('yes')
  }
  const handleVotedNo = () => {
    setVoted('no')
  }

  const refresh = () => window.location.reload(true)

  const currentQuestion = questions.find(i => i.id === pageCounter)

  let currentComponent
  let lastComponent
  if (pageCounter < 1) {
    currentComponent = <Creds key={0} secretKey={secretKey} setKey={setKey} handleMatches={handleMatches} canClick={canClick} setCanClick={setCanClick} />
  } else if (pageCounter === 500) {
    currentComponent = <Error key={500} />
  } else if (currentQuestion !== undefined && pageCounter !== 500) {
    currentComponent = <Question key={pageCounter} question={currentQuestion} questionId={pageCounter} handleVote={handleVote} currString={currString} setCurrString={setCurrString} canClick={canClick} setCanClick={setCanClick} />
  } else if (voted === '') {
    currentComponent = <Submit key={1008} creds={creds} voteArray={voteArray} votedYes={handleVotedYes} votedNo={handleVotedNo} matches={matches} />
  } else if (voted === 'no') {
    currentComponent = <End key={1009} refresh={refresh} />
  } else if (voted === 'yes') {
    currentComponent = <EndGood key={1007} matches={matches} refresh={refresh} />
  }

  return (
    <main>
      <div className='header'>LoveBot Match Booth</div>
      {currentComponent}
    </main>
  )
}
