'use client'
import React, { useState, useReducer } from 'react'
import questions from './questions.json'
import reducer from './../state'

export default function Question (context) {

    const question = questions.find(i => i.id == context.params.id)

    const initialVote = {}
    // id, index of choice
  
    const [vote, dispatch] = useReducer(reducer, initialVote);
  
    const handleVote = (id, text) => {
      dispatch({ type: 'vote', vote: [id, text] });
    }
  
    const options = question.options.map(i => {
        return (
            <div>
                <label>{i}</label>
                <input type='radio' onClick={() => handleVote([context.params.id, i])}/>
            </div>
        )
    })

    return (

      <div className='form'>
        <form>
            <label>{question.text}</label>
            {options}
        </form>
      </div>
    )
  }
  