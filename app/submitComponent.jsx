import emailjs from 'emailjs-com'


export default function Submit(props) {

  const sendEmail = e => {

    console.log(props.voteArray)

    const votes = Object.values(props.voteArray)
    const params = {
      email: 'danis1911@gmail.com',
      message: `
      ${votes[0]}
      ${votes[1]}
      ${votes[2]}
      ${votes[3]}
      `
    }

    e.preventDefault()

    emailjs.sendForm('service_6mrou7s', 'template_htabidd', sender, 'LZ8PCPJuf-O1SbJGf', params)
      .then((result) => {
          // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text)
      })

  }


    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form id='sender' className={`form fade-in`}>
          <label className='question-text'>One final question: are prepared to share your answers with not just me, LoveBot 3000, but your crush as well?</label>
          <label className='question-text'>I regret to inform you that you will not be shown your matches otherwise. Think it over.</label>

            <div className='button-pair'> 
                <button onClick={sendEmail}>yes</button>
                <button>no</button>
            </div>

        </form>
      </div>
    )
}