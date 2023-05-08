

export default function Creds(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className='form'>
          <label>Enter Your LoveBot Key</label>
          <label className='small-label'>Remember? This is the unique identifier you were given after filling out the Love Science survey.</label>
          <input id='key' type='text' value={props.key} onChange={e => {props.setKey(e.target.value)}} />
          <label>Where can I reach you?</label>
          <label className='small-label'>This can be an email address or a twitter handle.</label>
          <input id='name' type='text' value={props.contact} onChange={e => {props.setContact(e.target.value)}} />
          <button style={{ alignSelf: 'center'}} onClick={() => props.handleCreds()}>begin</button>

        </form>
      </div>
    )


}