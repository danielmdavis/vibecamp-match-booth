



export default function Submit(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>One final question: are prepared to share your answers with not just me, LoveBot 3000, but your crush as well?</label>
          <label className='question-text'>I regret to inform you that you will not be shown your matches otherwise. Think it over.</label>

            <div className='button-pair'> 
                <button onClick={() => props.handleCreds()}>yes</button>
                <button>no</button>
            </div>

        </form>
      </div>
    )
}