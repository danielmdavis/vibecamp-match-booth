
import autosize from 'autosize'

export default function Question (props) {

  autosize(document.querySelectorAll('textarea'))

  const getAnswer = () => {
    props.handleVote(props.question.text, props.currString)
    props.setCurrString('')
  }

  let options
  let entry
  if (props.question.options) {
    let key = 0
    options = props.question.options.map(i => {
      key += 1
      return (
        <div key={key} className='label-pair'>
            <label>{i}</label>
            <input type='radio' onClick={() => props.handleVote(props.question.text, i) }/>
        </div>
      )
    key += 1
    })
  } else {
    entry =
      <div style={{ fontFamily: 'Space Grotesk'}}>
          <textarea className='textarea' id='key' type='text' autocomplete='off' value={props.currString} onChange={e => {props.setCurrString(e.target.value)}} /> <br /><br />
          <button disabled={!props.canClick} style={{ alignSelf: 'center'}} onClick={() => getAnswer()}>next</button>
      </div>
  }

  const optionsOrEntry = options !== undefined ? options : entry

  if (props.currString !== '') {
    props.setCanClick(true)
  } else {
    props.setCanClick(false)
  }

  return (

    <div className={`form fade-in`}>
    <div className={`wrap question`}>
      <form className='form'>
          <label className='question-text'>{props.question.text}</label>
          <div className='question-options'>
          {optionsOrEntry}
          </div>
      </form>
    </div>
    </div>
  )
}
