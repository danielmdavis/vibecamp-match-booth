'use client'
import React, { useState, useReducer } from 'react'
import { useForm } from 'react-hook-form'
import reducer from './state'

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => console.log(data)


  const initialCreds = {creds: {key: '', nomen: ''}}
  let newCreds = {key: 'foo', nomen: 'bar'}

  const [creds, dispatch] = useReducer(reducer, initialCreds);

  const handleCreds = (creds) => {
    dispatch({ type: 'setCreds', creds: creds });
  }

  return (
    <main>
      <div className='wrap'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for='key'>Enter Your LoveBot Key</label>
          <input id='key'type='password' placeholder='key' {...register('LoveBot Key', {required: true})} />
          <label for='name'>What should I call you?</label>
          <input id='name' type='text' placeholder='name' {...register('What should I, LoveBot 3000, call you?', {})} />
          {/* <input type='submit' /> */}
          <button onClick={() => handleCreds(newCreds)}>submit</button>

        </form>
      </div>
    </main>
  )
}
