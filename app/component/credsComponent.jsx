

export default function Creds(props) {

  const setKey = e => {
    if (e.keyCode == 13) {
      e.preventDefault()
    } else {
      e => {
        props.setKey(e.target.value)
      }
    }
  }

  if (props.secretKey !== '') {
    props.setCanClick(true)
  } else {
    props.setCanClick(false)
  }

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className='form'>
          <label>Enter Your LoveBot passphrase</label>
          <label className='small-label'>Remember? This is the secret passphrase you came up with when filling out the Love Science survey. We sent it to your email.</label>
          <input id='key' type='text' value={props.secretKey} autocomplete='off' onChange={e => {props.setKey(e.target.value)}} onClick={props.startSong} />
          <button disabled={!props.canClick} style={{ alignSelf: 'center'}} onClick={() => props.handleMatches()}>begin</button>
        </form>
      </div>
    )


}