'use client'
import React, { useState, useReducer } from 'react'
import Creds from './credsComponent'
import Question from './questionComponent'
import questions from './questions.json'

export default function Home() {

  let [pageCounter, setPageCounter] = useState(0)

  let [secretKey, setKey] = useState('')
  let [contact, setContact] = useState('')
  let [creds, setCreds] = useState({})

  let [voteArray, setVoteArray] = useState([])

  
  const handleCreds = () => {
    // dispatch({ type: 'setCreds', creds: creds })
    setCreds({key: secretKey, contact: contact})
    setPageCounter(pageCounter += 1)
  }
  
  const handleVote = (question, choice) => {
    // console.log(choice)
    setVoteArray(voteArray => [...voteArray, {[question]: choice}])
    console.log(creds)
    console.log(voteArray)
    setPageCounter(pageCounter += 1)
  }

  const currentQuestion = questions.find(i => i.id === pageCounter)

  let currentComponent
  if (pageCounter < 1) {
    currentComponent = <Creds key={0} secretKey={secretKey} setKey={setKey} contact={contact} setContact={setContact} handleCreds={handleCreds} />
  } else {
    currentComponent = <Question key={pageCounter} question={currentQuestion} questionId={pageCounter} handleVote={handleVote} />
  }


  return (
    <main>
      {currentComponent}
    </main>
  )
}
