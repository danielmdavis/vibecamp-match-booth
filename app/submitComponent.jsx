



export default function Submit(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>And now, one final question. Are ready to share your answers with not just me, LoveBot 3000, but your crush as well?</label>
          <label className='question-text'>You will not be shown your matches otherwise. Think it over.</label>

            <div className='button-pair'> 
                <button onClick={() => props.handleCreds()}>yes</button>
                <button>no</button>
            </div>

        </form>
      </div>
    )
}