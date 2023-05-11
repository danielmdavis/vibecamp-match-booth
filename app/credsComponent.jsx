

export default function Creds(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className='form'>
          <label>Enter Your LoveBot passphrase</label>
          <label className='small-label'>Remember? This is the secret passphrase you came up with when filling out the Love Science survey. We sent it to your email.</label>
          <input id='key' type='text' value={props.secretKey} onChange={e => {props.setKey(e.target.value)}} />
          {/* <label>Where can I reach you?</label>
          <label className='small-label'>This can be an email address or a twitter handle.</label>
          <input id='name' type='text' value={props.contact} onChange={e => {props.setContact(e.target.value)}} /> */}
          <button style={{ alignSelf: 'center'}} onClick={() => props.handleMatches()}>begin</button>

        </form>
      </div>
    )


}