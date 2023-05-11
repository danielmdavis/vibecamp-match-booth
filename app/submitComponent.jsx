import emailjs from 'emailjs-com'


export default function Submit(props) {

  const sendEmail = e => {

    const votes = props.voteArray.map(v => {
      const vote = Object.entries(v)[0]
      return `
      &nbsp;&nbsp;&nbsp;&nbsp;${vote[0]}  ${vote[1]}`
    })

    // const styledVotes = `<div style={{ background-color: 'rgb(75,182,203)', color: 'rgb(239,103,69)', font-family: 'Helvetica'}}>
    //   Want to know who your match really is? Read on.

    //   ${votes}
    // </div>`

    const styledVotes = 
    `Want to know who your match really is, deep down? Read on.
      ${votes}

    If you're still interested, you can reach them at foo@bar.com

    Faithfully yours,
    LoveBot 3000


    `
    console.log(props.matches)

    const params = {
      email: 'danis1911@gmail.com',
      message: styledVotes
    }
    e.preventDefault()
    emailjs.send('service_6mrou7s', 'template_htabidd', params, 'LZ8PCPJuf-O1SbJGf')
      .then((result) => {
          // window.location.reload() 
      }, (error) => {
          console.log(error.text)
      })
    props.voted()
  }

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>One final question: are prepared to share your answers with not just me, LoveBot 3000, but your matches as well?</label>
          <label className='question-text'>I regret to inform you that you will not be shown your matches otherwise. Think it over.</label>

            <div className='button-pair'> 
                <button onClick={sendEmail}>yes</button>
                <button>no</button>
            </div>

        </form>
      </div>
    )
}