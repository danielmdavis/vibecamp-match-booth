

export default function End(props) {

    setTimeout(() => {
      props.refresh()
    }, 30000)

    return (
        <div className={`wrap`} style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text' style={{ marginTop: '-30px' }}>
          That’s too bad! All decisions are final, but we’re sure you’ll find love somewhere else. Thanks for playing.
          </label>
          <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoveBot 3000
          </label>


        </form>
      </div>
    )
}