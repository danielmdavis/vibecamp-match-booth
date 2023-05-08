

export default function Creds(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form>
          <label for='key'>Enter Your LoveBot Key</label>
          <input id='key' type='text' value={props.key} onChange={e => {props.setKey(e.target.value)}} />
          <label for='name'>Where can I reach you?</label>
          <input id='name' type='email' value={props.contact} onChange={e => {props.setContact(e.target.value)}} />
          <button onClick={() => props.handleCreds()}>begin</button>

        </form>
      </div>
    )


}