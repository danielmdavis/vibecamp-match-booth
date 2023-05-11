
export default function Question (props) {


    // id, index of choice
  
    // const [vote, dispatch] = useReducer(reducer, initialVote);


    // const handleVote = (id, text) => {
    //     dispatch({ type: 'vote', vote: [id, text] });
    //     eval(`location='/${parseInt(context.params.id) + 1}';`)
    // }
        let key = 0
        const options = props.question.options.map(i => {
          key += 1
          return (
            <div key={key} className='label-pair'>
                <label>{i}</label>
                <input type='radio' onClick={() => props.handleVote(props.question.text, i) }/>
            </div>
      )
        key += 1
    })

    return (

      <div className={`form fade-in`}>
        <form>
            <label className='question-text'>{props.question.text}</label>
            <div className='question-options'>
            {options}
            </div>
        </form>
      </div>
    )
  }
  