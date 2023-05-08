



export default function Submit(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form>
          <label className='question-text'>One final question: are ready to submit your answers? To not just LoveBot, but your crush?</label>
          <label className='question-text'>You will not be shown your matches otherwise. Think it over.</label>

          <button onClick={() => props.handleCreds()}>yes</button>
          <button>no</button>

        </form>
      </div>
    )
}