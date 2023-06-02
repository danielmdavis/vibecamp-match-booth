

export default function EndGood(props) {

  let key = 0
  const matches = props.matches.matches.map(match => {
    key += 1
    return <span key={key}> {match.name} <br /><br /></span>
  })

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>
          Congratulations on your {props.matches.matches.length} matches. <br /><br />
          {matches}
          </label>

        </form>
      </div>
    )
}