import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Submit(props) {

  const emailArray = props.matches.matches.map(match => {
    return match.email
  })

  let [emails, setEmails] = useState(emailArray)

  const sendEmail = (event, email) => {

    const votes = props.voteArray.map(v => {
      const vote = Object.entries(v)[0]
      return `
      ${vote[0]}  
      ${vote[1]}
      `
    }).join('')
    
    // const styledVotes = `<div style={{ background-color: 'rgb(75,182,203)', color: 'rgb(239,103,69)', font-family: 'Helvetica'}}>
    //   Want to know who your match really is? Read on.
    
    //   ${votes}
    // </div>`
    
    const styledVotes = 
    `Want to know who your match ${props.matches.name} really is, deep down?
    
    Here's how ${props.matches.name.slice(0, props.matches.name.indexOf(' '))} answered the following questions:
      ${votes}
      Now you know, and knowing is half the battle. Whether or not you're still interested is between you two.
      
      Faithfully yours,
      LoveBot 3000
      
      
      `

      console.log(styledVotes)

    const params = {
      email: email,
      message: styledVotes,
      name: props.matches.name
    }
    event.preventDefault()
    emailjs.send('lovebot', 'template_1', params, 'pl4zE7KE9MO7eFewc')
      .then((result) => {
          // window.location.reload() 
      }, (error) => {
          console.log(error.text)
      })
    props.votedYes()
  }

  const sendAllEmails = (event) => {
    emails.forEach(email => {
      sendEmail(event, email)
    })
  }

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>One final question: are you prepared to share your answers with not just me, LoveBot 3000, but your matches as well?</label>
          <label className='question-text'>I regret to inform you that you will not be shown your matches otherwise. Think it over.</label>

            <div className='button-pair'> 
                <button onClick={sendAllEmails}>yes</button>
                <button onClick={props.votedNo}>no</button>
            </div>

        </form>
      </div>
    )
}