
export default function Question (props) {


    // id, index of choice
  
    // const [vote, dispatch] = useReducer(reducer, initialVote);


    // const handleVote = (id, text) => {
    //     dispatch({ type: 'vote', vote: [id, text] });
    //     eval(`location='/${parseInt(context.params.id) + 1}';`)
    // }

        const options = props.question.options.map(i => {
            return (
                <div>
                    <label>{i}</label>
                    <input type='radio' onClick={() => props.handleVote([props.questionId, i]) }/>
                </div>
        )
    })

    return (

      <div className='form'>
        <form>
            <label>{props.question.text}</label>
            {options}
        </form>
      </div>
    )
  }
  