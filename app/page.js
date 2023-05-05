'use client'
import React, { useState, useReducer } from 'react'
import { useForm } from 'react-hook-form'
import reducer from './state'

export default function Home() {

  const initialState = {count: 0}
  const [state, dispatch] = useReducer(reducer, initialState)

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <main>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <div className='wrap'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for='key'>Enter Your LoveBot Key</label>
          <input id='key'type='password' placeholder='key' {...register('LoveBot Key', {required: true})} />
          <label for='name'>What should I call you?</label>
          <input id='name' type='text' placeholder='name' {...register('What should I, LoveBot 3000, call you?', {})} />
          <input type='submit' />
        </form>
      </div>
    </main>
  )
}
