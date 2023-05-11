

export default function EndGood(props) {

  console.log(props.matches.matches)
  let key = 0
  const matches = props.matches.matches.map(match => {
    key += 1
    return <span key={key}> {match.name} :: {match.email} <br /><br /></span>
  })

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>
          Congratulations on your {props.matches.matches.length} matches. <br /><br />
          {matches}
          </label>
          {/* <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoveBot 3000
          </label> */}


        </form>
      </div>
    )
}