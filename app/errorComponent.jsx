

export default function Error(props) {

    return (
        <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>
            I'm sorry, you don't seem to be in the system. Please try again or contact an administrator.
          </label>
          {/* <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoveBot 3000
          </label> */}


        </form>
      </div>
    )
}