

export default function EndGood(props) {

  let key = 0
  const matches = props.matches.matches.map(match => {
    key += 1
    return <span key={key}> {match.name} <br /><br /></span>
  })

  setTimeout(() => {
    props.refresh()
  }, 40000)

  return (
      <div className={'wrap end'} style={{ fontFamily: 'Space Grotesk' }}>
      <form className={`form fade-in`}>
        <label className='question-text'>
        Congratulations! In order of compatibility, these are your top {props.matches.matches.length} matches.<br /><br />
        <div style={{ fontSize: '1.33em', fontWeight: 'bold', margin: '10px' }}>{matches}</div>
        Your answers have been sent to your matches. Please make a note of them before the page resets for the next user in forty seconds.
        </label>

      </form>
    </div>
  )
}