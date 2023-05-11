

export default function Error(props) {

    return (
      <div className='wrap' style={{ fontFamily: 'Space Grotesk' }}>
        <form className={`form fade-in`}>
          <label className='question-text'>
            I&apos;m sorry, you don&apos;t seem to be in the system. Please try again or contact an administrator.
          </label>
        </form>
      </div>
    )
}